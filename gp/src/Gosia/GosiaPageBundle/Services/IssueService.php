<?php
/**
 * Created by PhpStorm.
 * User: piotr.kowerzanow
 * Date: 2015-10-12
 * Time: 00:06
 */

namespace Gosia\GosiaPageBundle\Services;

use Gosia\GosiaPageBundle\Services\Base\ServiceBase;
use Gosia\GosiaPageBundle\Entity\IssueRepository;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ParameterBag;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;


class IssueService extends ServiceBase
{
    public function __construct(EntityManagerInterface $entityManager, Container $container, RequestStack $requestStack)
    {
        parent::__construct($entityManager, $container, $requestStack);
        $this->repository = $this->entityManager->getRepository('GosiaPageBundle:Issue');
    }



}