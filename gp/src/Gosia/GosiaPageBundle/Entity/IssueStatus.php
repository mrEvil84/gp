<?php

namespace Gosia\GosiaPageBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * Issue
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class IssueStatus
{
	CONST STATUS_NEW = 0;
	CONST STATUS_IN_PROGRESS = 1;
	CONST STATUS_DONE = 2;
	CONST STATUS_SENDED = 3;
}
