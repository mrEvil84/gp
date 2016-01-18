<?php

namespace Gosia\GosiaPageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Config\Definition\Exception\Exception;

use Symfony\Component\Form\FormBuilder;
use Symfony\Component\Form\FormError;

use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Gosia\GosiaPageBundle\Form\IssueType;
use Gosia\GosiaPageBundle\Entity\Issue;
use Gosia\GosiaPageBundle\Entity\IssueStatus;
use Gosia\GosiaPageBundle\Services\IssueService;



class DefaultController extends Controller
{
    /**
     * @Route("/", name="gosia_page_index")
     * @Template()
     */
    public function indexAction()
    {
    	
        return [
        		'foo' => 'bar'
        ];
    }
    
    /**
     * @Route("/portfolio", name="gosia_page_portfolio")
     * @Template()
     */
    public function portfolioAction()
    {
    	 
    	return [
    			'foo' => 'bar'
    	];
    }
    
    /**
     * @Route("/prices", name="gosia_page_prices")
     * @Template()
     */
    public function pricesAction()
    {
    	 
    	return [
    			'foo' => 'bar'
    	];
    }
    
    /**
     * @Route("/contact", name="gosia_page_contact")
     * @Template()
     */
    public function contactAction(Request $request)
    {
		$issueService = $this->container->get('gosiapage.issue_service');

		$issueEntity = new Issue();


		$issueForm = $this->createForm(
			IssueType::class,
			$issueEntity,
			array(
				'action' => $this->generateUrl('gosia_page_contact'),
				'method' => 'POST',
			)
		);




		$issueService->setIssueForm($issueForm);
		$issueService->setIssueEntity($issueEntity);
		$processIssueFormResult = $issueService->processIssueForm();

		if($processIssueFormResult === true) {
			$this->addFlash('notice', $this->get('translator')->trans('Issue was added'));
			return $this->redirect($this->generateUrl('gosia_page_index'));
		}


        return [
            'issueForm' => $processIssueFormResult->createView(),
        ];

    }
     
    
    /**
     * @Route("/termsOfUse", name="gosia_page_terms_of_use")
     * @Template()
     */
    public function termsOfUseAction()
    {
    	 
    	return [
    			'foo' => 'bar'
    	];
    }
    
    /**
     * @Route("/setLanguage/{requestedLocale}", name="gosia_page_set_language", defaults={"requestedLocale": "pl"}, requirements={"requestedLocale": "pl|de" })
     */
    public function setLanguageAction(Request $request, $requestedLocale)
    {
        $request->getSession()->set('_locale', $requestedLocale);
        return $this->redirect($this->generateUrl('gosia_page_index'));
    }

}
