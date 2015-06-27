<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
	
    /**
     * @Route("/app/example", name="homepage")
     * @Method({"GET"})
     * @Template()
     */
    public function indexAction()
    {
    	
    	
        return [
        		'foo' => 'baar', 
        ];
    }
}
