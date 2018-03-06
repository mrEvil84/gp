<?php
namespace Gosia\GosiaPageBundle\Services;

use Gosia\GosiaPageBundle\Entity\Issue;
use Gosia\GosiaPageBundle\Services\Base\ServiceBase;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpFoundation\RequestStack;
use Gosia\GosiaPageBundle\Entity\IssueStatus;
use Symfony\Component\Form\Form as Form;

/**
 * Class IssueService
 * @package Gosia\GosiaPageBundle\Services
 */
class IssueService extends ServiceBase
{
    /**
     * @var Form
     */
    private $issueForm;

    /**
     * @var Issue
     */
    private $issueEntity;

    /**
     * @var Container
     */
    private $serviceContainer;

    /**
     * @var MessageService
     */
    private $messageService;

    /**
     * @var \Swift_Mailer
     */
    private $mailerService;

    /**
     * @param EntityManagerInterface $entityManager
     * @param Container $container
     * @param RequestStack $requestStack
     * @param MessageService $messageService
     * @param \Swift_Mailer $mailer
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        Container $container,
        RequestStack $requestStack,
        MessageService $messageService,
        \Swift_Mailer $mailer
    )
    {
        parent::__construct($entityManager, $container, $requestStack);
        $this->messageService = $messageService;
        $this->mailerService = $mailer;
    }

    public function setServiceContainer($serviceContainer)
    {
        $this->serviceContainer = $serviceContainer;
    }

    /**
     * @param Form $issueForm
     */
    public function setIssueForm(Form $issueForm)
    {
        $this->issueForm = $issueForm;
    }

    /**
     * @param mixed $issueEntity
     */
    public function setIssueEntity($issueEntity)
    {
        $this->issueEntity = $issueEntity;
    }

    /**
     * @param Issue $issue
     */
    public function createIssue(Issue $issue)
    {
        $this->saveIssueToDb($issue);
        $applicationMessage = $this->messageService->getApplicationMessage($issue);
        $confirmationMessage = $this->messageService->getConfirmationMessage($issue);
        $this->messageService->send($confirmationMessage);
        $this->messageService->send($applicationMessage);
    }

    /**
     * @param Issue $issue
     */
    private function saveIssueToDb(Issue $issue)
    {
        $issue->upload();
        $issue->setStatus(IssueStatus::STATUS_NEW);
        $this->entityManager->persist($issue);
        $this->entityManager->flush();
    }

}