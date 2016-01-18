<?php

/**
 * Created by PhpStorm.
 * User: piotr.kowerzanow
 * Date: 2015-10-11
 * Time: 23:43
 */
namespace Gosia\GosiaPageBundle\Services\Base;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpFoundation\RequestStack;


/**
 * Class ServiceBase
 * @package Gosia\GosiaPageBundle\Services\Base
 */
abstract class ServiceBase
{
    protected $entityManager;

    protected $repository;

    protected $container;

    protected $request;

    /**
     * @param EntityManagerInterface $entityManager
     * @param Container $container
     * @param RequestStack $requestStack
     */
    public function __construct(EntityManagerInterface $entityManager, Container $container, RequestStack $requestStack )
    {
        $this->entityManager = $entityManager;
        $this->container = $container;
        $this->request = $requestStack->getCurrentRequest();
    }

    /**
     * @return mixed
     */
    public function getRepository()
    {
        return $this->repository;
    }

}