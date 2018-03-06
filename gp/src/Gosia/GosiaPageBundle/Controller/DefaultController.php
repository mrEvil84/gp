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
     *
     * @Route("/", name="gosia_page_index")
     * @Template()
     * @param Request $request
     * @return array
     */
    public function indexAction(Request $request)
    {
        $issueService = $this->container->get('gosiapage.issue_service');

        $issueEntity = new Issue();
        $issueForm = $this->createForm(
            new IssueType(),
            $issueEntity,
            [
                'action' => $this->generateUrl('gosia_page_index'),
                'method' => 'POST',
            ]
        );

        $issueForm->handleRequest($request);
        if ($issueForm->isValid()) {
            $issueService->createIssue($issueForm->getData());
            $this->addFlash('issue_added', $this->container->get('translator')->trans('issue added'));

        } else {
            return [
                'issueForm' => $issueForm->createView(),
            ];
        }
        return [
            'issueForm' => $issueForm->createView(),
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
     * @param Request $request
     * @return array
     */
    public function pricesAction(Request $request)
    {
        $issueService = $this->container->get('gosiapage.issue_service');

        $issueEntity = new Issue();
        $issueForm = $this->createForm(
            new IssueType(),
            $issueEntity,
            [
                'action' => $this->generateUrl('gosia_page_prices'),
                'method' => 'POST',
            ]
        );

        $issueForm->handleRequest($request);
        if ($issueForm->isValid()) {
            $issueService->createIssue($issueForm->getData());
            $this->addFlash('issue_added', $this->container->get('translator')->trans('issue added'));

        } else {
            return [
                'issueForm' => $issueForm->createView(),
            ];
        }
        return [
            'issueForm' => $issueForm->createView(),
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
        } else {
            return [
                'issueForm' => $issueForm->createView(),
            ];
        }
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
     * @Route("/aboutMe", name="gosia_page_about_me")
     * @Template()
     */
    public function aboutMeAction()
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
