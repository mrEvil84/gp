<?php
namespace Gosia\GosiaPageBundle\Services;

use Gosia\GosiaPageBundle\Entity\Issue;
use Swift_Mailer;
use Swift_SmtpTransport;
use Swift_TransportException;
use Symfony\Component\DependencyInjection\Container;

/**
 * Class MessageService
 * @package Gosia\GosiaPageBundle\Services
 */
class MessageService
{
    /**
     * @var Container
     */
    private $serviceContainer;

    const CONFIRMATION_MESSAGE_TEMPLATE = 'GosiaPageBundle:Emails:confirmation.html.twig';
    const CONFIRMATION_MESSAGE_TYPE = 'text/html';
    const CONFIRMATION_MESSAGE_CHARSET = 'utf-8';

    /**
     * MessageService constructor.
     * @param Container $container
     */
    public function __construct(Container $container)
    {
        $this->serviceContainer = $container;
    }

    /**
     * @param $issue Issue
     * @return \Swift_Mime_MimePart
     */
    public function getConfirmationMessage(Issue $issue)
    {
        $confirmationMessage = \Swift_Message::newInstance()
            ->setSubject($this->serviceContainer->get('translator')->trans('issue appear'))
            ->setFrom($this->serviceContainer->getParameter('confirmation_message_from_email'))
            ->setTo($issue->getEmail())
            ->setBody(
                $this->serviceContainer->get('templating')->renderResponse(
                    static::CONFIRMATION_MESSAGE_TEMPLATE,
                    [
                        'issueDate' => new \DateTime(),
                    ]
                ),
                static::CONFIRMATION_MESSAGE_TYPE,
                static::CONFIRMATION_MESSAGE_CHARSET
            );

        return $confirmationMessage;
    }

    /**
     * @param $issue Issue
     * @return \Swift_Mime_MimePart
     */
    public function getApplicationMessage(Issue $issue)
    {
        $message = \Swift_Message::newInstance()
            ->setSubject($this->serviceContainer->getParameter('application_to_email_subject'))
            ->setFrom($this->serviceContainer->getParameter('confirmation_message_from_email'))
            ->setTo($this->serviceContainer->getParameter('application_to_email'))
            ->setBody(
                $this->serviceContainer->get('templating')->renderResponse(
                    'GosiaPageBundle:Emails:issue.html.twig',
                    [
                        'name' => $issue->getName(),
                        'surname' => $issue->getSurname(),
                        'email' => $issue->getEmail(),
                        'street' => $issue->getStreet(),
                        'cityZipCode' => $issue->getCityZipCode(),
                        'issueDescription' => $issue->getIssueDescription(),
                        'telephone' => $issue->getTelephone(),
                        'issueDate' => new \DateTime(),
                    ]
                ),
                self::CONFIRMATION_MESSAGE_TYPE,
                self::CONFIRMATION_MESSAGE_CHARSET
            );

        if($issue->getFileName() !== null){
            $message->attach(\Swift_Attachment::fromPath($issue->getFilePath().'/'.$issue->getFileName()));
        }

        return $message;
    }

    /**
     * @param \Swift_Mime_MimePart $message
     * @throws Swift_TransportException
     */
    public function send(\Swift_Mime_MimePart $message)
    {
        $transporter = Swift_SmtpTransport::newInstance(
            $this->serviceContainer->getParameter('application_sender_host'),
            $this->serviceContainer->getParameter('application_sender_port'),
            $this->serviceContainer->getParameter('application_sender_secutity_type')
        );

        $transporter
            ->setUsername($this->serviceContainer->getParameter('application_sender_username'))
            ->setPassword($this->serviceContainer->getParameter('application_sender_password'));

        $mailer = Swift_Mailer::newInstance($transporter);
        $mailer->send($message);
    }

}