<?php
/**
 * Created by PhpStorm.
 * User: piotr.kowerzanow
 * Date: 2015-10-12
 * Time: 00:06
 */

namespace Gosia\GosiaPageBundle\Services;

use Gosia\GosiaPageBundle\Services\Base\ServiceBase;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpFoundation\RequestStack;

use Gosia\GosiaPageBundle\Entity\IssueStatus;

use Symfony\Component\Form\Form as Form;


class IssueService extends ServiceBase
{
    private $issueForm;

    private $issueEntity;

    private $serviceContainer;

    /**
     * @param EntityManagerInterface $entityManager
     * @param Container $container
     * @param RequestStack $requestStack
     */
    public function __construct(EntityManagerInterface $entityManager, Container $container, RequestStack $requestStack)
    {
        parent::__construct($entityManager, $container, $requestStack);
        $this->repository = $this->entityManager->getRepository('GosiaPageBundle:Issue');
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
     * @return bool
     */
    public function processIssueForm()
    {
        $this->issueForm->handleRequest($this->request);

        if($this->issueForm->isValid()) {

            $this->issueEntity->upload();
            $this->issueEntity->setStatus(IssueStatus::STATUS_NEW);
            $this->entityManager->persist($this->issueEntity);
            $this->entityManager->flush();

            $applicationMessage = $this->prepareApplicationMessage();
            $confirmationMessage = $this->prepareConfirmationMessage();

            $mailerService = $this->serviceContainer->get('mailer');
            $mailerService->send($applicationMessage);
            $mailerService->send($confirmationMessage);
            //$type = 'success';
            //$message = $this->serviceContainer->get("translator")->trans('Issue was added');
            //$session =  $this->serviceContainer->get('request')->getSession()->setFlash($type, $message);
            return true;
        }

        return $this->issueForm;
    }


    /**
     * @return \Swift_Mime_MimePart
     */
    private function prepareConfirmationMessage()
    {
        $confirmationMessage = \Swift_Message::newInstance()
            ->setSubject($this->serviceContainer->get('translator')->trans('issue appear'))
            ->setFrom('antoni.pestka@gmail.com')
            ->setTo($this->issueEntity->getEmail())
            ->setBody(
                $this->serviceContainer->get('templating')->renderResponse(
                    'GosiaPageBundle:Emails:confirmation.html.twig',
                    [
                        'issueDate' => new \DateTime(),
                    ]
                ),
                'text/html',
                'utf-8'
            );

        return $confirmationMessage;
    }


    /**
     * @return \Swift_Mime_MimePart
     */
    private function prepareApplicationMessage()
    {
        $message = \Swift_Message::newInstance()
            ->setSubject('Zgłoszenie tłumaczenia')
            ->setFrom('antoni.pestka@gmail.com')
            ->setTo('piotr.kowerzanow@gmail.com')
            ->setBody(
                $this->serviceContainer->get('templating')->renderResponse(
                    'GosiaPageBundle:Emails:issue.html.twig',
                    [
                        'name' => $this->issueEntity->getName(),
                        'surname' => $this->issueEntity->getSurname(),
                        'email' => $this->issueEntity->getEmail(),
                        'street' => $this->issueEntity->getStreet(),
                        'cityZipCode' => $this->issueEntity->getCityZipCode(),
                        'issueDescription' => $this->issueEntity->getIssueDescription(),
                        'telephone' => $this->issueEntity->getTelephone(),
                        'issueDate' => new \DateTime(),
                    ]
                ),
                'text/html',
                'utf-8'
            );

        if($this->issueEntity->getFileName() !== null){
            $message->attach(\Swift_Attachment::fromPath($this->issueEntity->getFilePath().'/'.$this->issueEntity->getFileName()));
        }

        return $message;
    }

}