<?php

namespace Gosia\GosiaPageBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Form\FormBuilder;
use Symfony\Component\Form\FormError;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Gosia\GosiaPageBundle\Form\IssueType;
use Gosia\GosiaPageBundle\Form\SearchType;
use Gosia\GosiaPageBundle\Entity\Issue;
use Gosia\GosiaPageBundle\Entity\IssueStatus;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/backend")
 */
class BackendController extends Controller
{
    /**
     * @Route("/", name="gosia_page_backend_index")
     * @Method({"POST","GET"})
     * @Template()
     */
    public function indexAction(Request $request)
    {
    	$this->denyAccessUnlessGranted(
    			'ROLE_USER',
    			null,
    			$this->get('translator')->trans('No rights to access this page!')
    	);
    	
    	$keyword = $request->get('keyword','');
    	
    	$issueCurrentPage = $request->query->get('issuePage', 1);
    	 
    	$issueLimit = $this->container->getParameter('pagination_page_limit');
    	 
    	$issueOffset = ($issueCurrentPage - 1) * $issueLimit;
    	

    	$searchForm = $this->createForm(
    			new SearchType(), 
    			array('keyword_name'=>'keyword'),
    			array(
    					'method' => 'GET',
    					'action' => $this->generateUrl('gosia_page_backend_index'),
    			));
    	
    	$searchForm->handleRequest($request);
    	
    	if ($searchForm->isValid()) {
    		$requestQuery = $searchForm->getData('keyword');
    		$keyword = $requestQuery['keyword'];
    		
    		
    		$searchForm = $this->createForm(
    				new SearchType($keyword),
    				array('keyword_name'=>'keyword'),
    				array(
    						'method' => 'GET',
    						'action' => $this->generateUrl('gosia_page_backend_index'),
    				));
    		
    		if($keyword=='') {
    			$issuePaginator = $this
    			->getDoctrine()
    			->getManager()
    			->getRepository('GosiaPageBundle:Issue')
    			->findByAllLastDate( $issueOffset, $issueLimit);
    		} else {
    			$issuePaginator = $this
    			->getDoctrine()
    			->getManager()
    			->getRepository('GosiaPageBundle:Issue')
    			->findBySearchCostKeyword($keyword, $issueOffset, $issueLimit);
    		}

    		$issueTotalPages = ceil($issuePaginator->count() / $issueLimit);
    		
    		return [
    				'keyword' => $keyword,
    				'searchForm' => $searchForm->createView(),
    				'issues' => $issuePaginator->getIterator(),
    				'issueCurrentPage' => $issueCurrentPage,
    				'issueTotalPages' => $issueTotalPages,
    		];
    	}
    	
    	if('' === $keyword) {
    		$issuePaginator = $this
    		->getDoctrine()
    		->getManager()
    		->getRepository('GosiaPageBundle:Issue')
    		->findByAllLastDate( $issueOffset, $issueLimit);
    	} else {
    		$issuePaginator = $this
    		->getDoctrine()
    		->getManager()
    		->getRepository('GosiaPageBundle:Issue')
    		->findBySearchCostKeyword($keyword, $issueOffset, $issueLimit);
    	}
    	
    	$issueTotalPages = ceil($issuePaginator->count() / $issueLimit);
    	$issueRepo = $this->getDoctrine()->getRepository('GosiaPageBundle:Issue');
  	
        return [
        	'keyword' => $keyword,
        	'searchForm' => $searchForm->createView(),
        	'issues' => $issuePaginator->getIterator(),
        	'issueCurrentPage' => $issueCurrentPage,
        	'issueTotalPages' => $issueTotalPages,
        ];
        
    }
    
    /**
     * @Route("/edit", name="gosia_page_backend_edit")
     * @Method({"POST","GET"})
     * @Template()
     */
    public function editAction(Request $request)
    {
    	$this->denyAccessUnlessGranted(
    			'ROLE_USER',
    			null,
    			$this->get('translator')->trans('No rights to access this page!')
    	);
    	
    	$issueId = $request->get('issueId',null);
    	
    	
    	if($issueId != null) {
    		
    		$issueRepo = $this->getDoctrine()->getRepository('GosiaPageBundle:Issue');
    		$issue = $issueRepo->find($issueId);
    		
    		
    		if($issue == null) {
    			$this->addFlash('notice', $this->get('translator')->trans('Brak zgłoszenia z id = '. $issueId .' !'));
    			return $this->redirect($this->generateUrl('gosia_page_backend_index'));
    		}

    		if($issueId != null) {
    			
    			$issueForm = $this->createForm(
    					new IssueType(['submit_label'=>'Uaktualnij','captha'=>false, 'status'=>$issue->getStatus(),'file'=>false]),
    					$issue,
    					array(
    							'action' => $this->generateUrl('gosia_page_backend_issue_update',array('issueId'=>$issueId)),
    							'method' => 'POST',
    					)
    			);
    			
    			return [
    					'issueForm' => $issueForm->createView(),
    			];
    			
    		} else {
    			$this->addFlash('notice', $this->get('translator')->trans('Brak zgłoszenia z id = null'));
    			return $this->redirect($this->generateUrl('gosia_page_backend_index'));
    		}
 
    	}
    }
    
    /**
     * @Route("/update", name="gosia_page_backend_issue_update")
     * @Method({"POST","GET"})
     */
    public function issueUpdateAction(Request $request)
    {
    	
    	$this->denyAccessUnlessGranted(
    			'ROLE_USER',
    			null,
    			$this->get('translator')->trans('No rights to access this page!')
    	);
    	
    	$issueId = $request->get('issueId',null);
    	
    	if($issueId == null) {
    		$this->addFlash('notice', $this->get('translator')->trans('Brak zgłoszenia z id = '. $issueId .' !'));
    		return $this->redirect($this->generateUrl('gosia_page_backend_index'));
    	}    	
    	
    	$em = $this->getDoctrine()->getManager();
    	$issue = $em->getRepository('GosiaPageBundle:Issue')->find($issueId);
    	
    	
    	if($issue == null) {
    		$this->addFlash('notice', $this->get('translator')->trans('Brak zgłoszenia z id = '. $issueId .' !'));
    		return $this->redirect($this->generateUrl('gosia_page_backend_index'));
    	}
    	
    	
    	$issueForm = $this->createForm(
    			new IssueType(['submit_label'=>'Uaktualnij', 'captha'=>false, 'status'=> null, 'file'=>false]),
    			$issue,
    			array(
    					'action' => $this->generateUrl('gosia_page_backend_issue_update'),
    					'method' => 'POST',
    			)
    	);
    	
    	$issueForm->handleRequest($request);
    	if($issueForm->isValid()) {
    		$em->flush();
    		$this->addFlash('notice', $this->get('translator')->trans('Zgłoszenie zostało uaktualnione.'));
    		return $this->redirect($this->generateUrl('gosia_page_backend_index'));
    	} 
    }
    
    /**
     * @Route("/download", name="gosia_page_download_file")
     * @Method({"POST","GET"})
     */
    public function downloadFileAction(Request $request)
    {
    	$this->denyAccessUnlessGranted(
    			'ROLE_USER',
    			null,
    			$this->get('translator')->trans('No rights to access this page!')
    	);

    	$issueId = $request->get('issueId', null);
    	
    	if($issueId != null) {
    		$issueRepo = $this->getDoctrine()->getRepository('GosiaPageBundle:Issue');
    	
    		$issue = $issueRepo->find($issueId);
    		
    		if($issue == null) {
    			$this->addFlash('notice', $this->get('translator')->trans('Nie znaleziono zgłoszenia w bazie danych ! '));
    			return $this->redirect($this->generateUrl('gosia_page_backend_index'));
    		}
    		
    		$fileName = $issue->getFileName();
    		$path = $this->get('kernel')->getRootDir() . '/../' . 'web/uploads/documents/' . $fileName;
    		
    		$file = new File($path);
    		$extension = $file->guessExtension();
    		$mimeType = $file->getMimeType();
    		
    		$content = file_get_contents($path);
    		$response = new Response();
    		$response->headers->set('Content-Type', $mimeType);
    		$response->headers->set('Content-Disposition', 'attachment;filename="'. $issue->getOriginalFileName());
    		
    		$response->setContent($content);
    		return $response;
    	} else {
    		$this->addFlash('notice', $this->get('translator')->trans('Pliku nie znaleziono! '));
    		return $this->redirect($this->generateUrl('gosia_page_backend_index'));
    	}
    }

    /**
     * @Route("/login", name="gosia_page_backend_login")
     * @Template()
     */
    public function loginAction(Request $request) {

    	$authenticationUtils = $this->get('security.authentication_utils');
    
    	// get the login error if there is one
    	$error = $authenticationUtils->getLastAuthenticationError();
    
    	// last username entered by the user
    	$lastUsername = $authenticationUtils->getLastUsername();
    
    	return array(
    			// last username entered by the user
    			'last_username' => $lastUsername,
    			'error'         => $error
    	);
    }
    
    /**
     * @Route("/login_check", name="gosia_page_backend_login_check")
     */
    public function loginCheckAction() {
    	//$session->set('login', 'true');
    }
    
    /**
     * @Route("/backend/logout", name="gosia_page_logout")
     */
    public function logoutAction() {
    	//remove login session
    	// redirect to login/index
    }

}
