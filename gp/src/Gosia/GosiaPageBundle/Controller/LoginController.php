<?php

namespace Gosia\GosiaPageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;


class LoginController extends Controller
{
	/**
	 * @Route("/login", name="gosia_page_login")
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
	 * @Route("/login_check", name="gosia_page_login_check")
	 */
	public function loginCheckAction() {
		//$session->set('login', 'true');
	}
	
	/**
	 * @Route("/logout", name="gosia_page_logout")
	 */
	public function logoutAction() {
		//remove login session
		// redirect to login/index
	}
}
