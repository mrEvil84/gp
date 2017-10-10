<?php

namespace Gosia\GosiaPageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Gosia\GosiaPageBundle\Form\IssueType;
use Gosia\GosiaPageBundle\Entity\Issue;
use Gosia\GosiaPageBundle\Entity\IssueStatus;

/**
 * Class DefaultController
 * @package Gosia\GosiaPageBundle\Controller
 */
class DefaultController extends Controller
{
    /**
     * @Route("/", name="gosia_page_index")
     * @Template()
     */
    public function indexAction()
    {
        return [
            'foo' => 'bar',
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
            new IssueType(),
            $issueEntity,
            [
                'action' => $this->generateUrl('gosia_page_contact'),
                'method' => 'POST',
            ]
        );

        $issueForm->handleRequest($request);
        if ($issueForm->isValid()) {
            //var_dump($issueForm->getData());
            //die;
        } else {

            //var_dump($issueForm->getErrors());

            return [
                'issueForm' => $issueForm->createView(),
            ];
        }


//        $issueService->setIssueForm($issueForm);
//        $issueService->setIssueEntity($issueEntity);
//        $processIssueFormResult = $issueService->processIssueForm();
//
//        if ($processIssueFormResult === true) {
//            $this->addFlash('notice', $this->get('translator')->trans('Issue was added'));
//
//            return $this->redirect($this->generateUrl('gosia_page_index'));
//        }
//
//
//        return [
//            'issueForm' => $processIssueFormResult->createView(),
//        ];
//
        // old approach


//    	$issueForm->handleRequest($request);
//    	if($issueForm->isValid()) {
//
//    		$issueEntity->upload();
//
//    		$em = $this->getDoctrine()->getManager();
//    		$issueEntity->setStatus(IssueStatus::STATUS_NEW);
//    		$em->persist($issueEntity);
//    		$em->flush();
//
//    		$message = \Swift_Message::newInstance()
//    		->setSubject('Zgłoszenie tłumaczenia')
//    		->setFrom('antoni.pestka@gmail.com')
//    		->setTo('piotr.kowerzanow@gmail.com')
//    		->setBody(
//    				$this->renderView(
//    						'GosiaPageBundle:Emails:issue.html.twig',
//    						[
//    								'name' => $issueEntity->getName(),
//    								'surname' => $issueEntity->getSurname(),
//    								'email' => $issueEntity->getEmail(),
//    								'street' => $issueEntity->getStreet(),
//    								'cityZipCode' => $issueEntity->getCityZipCode(),
//    								'issueDescription' => $issueEntity->getIssueDescription(),
//    								'telephone' => $issueEntity->getTelephone(),
//    								'issueDate' => new \DateTime(),
//    						]
//    				),
//    				'text/html',
//    				'utf-8'
//    		);
//
//    		if($issueEntity->getFileName() != null){
//    			$message->attach(\Swift_Attachment::fromPath($issueEntity->getFilePath().'/'.$issueEntity->getFileName()));
//    		}
//
//    		$confirmationMessage = \Swift_Message::newInstance()
//    		->setSubject($this->get('translator')->trans('issue apear'))
//    		->setFrom('antoni.pestka@gmail.com')
//    		->setTo($issueEntity->getEmail())
//    		->setBody(
//    				$this->renderView(
//    						'GosiaPageBundle:Emails:confirmation.html.twig',
//    						[
//    								'issueDate' => new \DateTime(),
//    						]
//    				),
//    				'text/html',
//    				'utf-8'
//    		);
//
//    		$this->get('mailer')->send($message);
//    		$this->get('mailer')->send($confirmationMessage);
//
//
//    		$this->addFlash('notice', $this->get('translator')->trans('Issue was added'));
//    		return $this->redirect($this->generateUrl('gosia_page_index'));
//
//    	}
//
//    	return [
//    			'issueForm' => $issueForm->createView(),
//    	];
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
     * @Route("/setLanguage/{_locale}", name="gosia_page_set_language", defaults={"_locale": "pl"}, requirements={"_locale": "pl|de" })
     * @param $request Request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function setLanguageAction($_locale, Request $request)
    {
        $request->getSession()->set('_locale', $_locale);

        return $this->redirect($this->generateUrl('gosia_page_index'));
    }

}
