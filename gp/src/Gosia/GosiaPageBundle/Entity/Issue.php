<?php

namespace Gosia\GosiaPageBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * Issue
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Gosia\GosiaPageBundle\Entity\IssueRepository")
 */
class Issue
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;
    
    /** 
     * @ORM\Column(type="datetime", name="postedAt") 
     * 
     */
    private $postedAt;
    
    /**
    * @ORM\Column(name="status_id", type="integer", options={"default" = 0})
    */
    private $statusId;    
    
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="surname", type="string", length=255)
     */
    private $surname;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255) 
     * @Assert\Email(message = "email.not_valid")
     */
    private $email;
   
    /**
     * @var string
     *
     * @ORM\Column(name="street", type="string", length=255)
     */
    private $street;
    
    /**
     * @var string
     *
     * @ORM\Column(name="cityZipCode", type="string", length=255)
     */
    private $cityZipCode;

    /**
     * @var string
     *
     * @ORM\Column(name="issueDescription", type="text")
     */
    private $issueDescription;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=255, nullable=true)
     */
    private $telephone;
    
    /**
     * @var string
     *
     * @ORM\Column(name="fileName", type="string", length=255, nullable=true)
     */
    private $fileName;
    
    /**
     * @var string
     *
     * @ORM\Column(name="originalFileName", type="string", length=255, nullable=true)
     */
    private $originalFileName;
    
    /**
     * @var string
     *
     * @ORM\Column(name="filePath", type="string", length=255, nullable=true)
     */
    private $filePath;
   
    /**
     * @Assert\File(maxSize="6000000")
     */
    private $file;
    
    
    public function __construct()
    {
    	$this->postedAt = new \DateTime("now");
    }
    
    /**
     * Sets file.
     *
     * @param UploadedFile $file
     */
    public function setFile(UploadedFile $file = null)
    {
    	$this->file = $file;
    }
    
    /**
     * Get file.
     *
     * @return UploadedFile
     */
    public function getFile()
    {
    	return $this->file;
    }
    
    public function getFileName()
    {
    	return $this->fileName;
    }
    
    public function setFileName($fileName) 
    {
    	$this->fileName = $fileName;
    }


    /**
     * @return int
     */
    public function getStatus()
    {
    	return $this->statusId;
    }
    
    /**
     * 
     * @param int $status
     */
    public function setStatus($status)
    {
    	$this->statusId = $status;
    }
    
    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Issue
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set surname
     *
     * @param string $surname
     * @return Issue
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;

        return $this;
    }

    /**
     * Get surname
     *
     * @return string 
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Issue
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set address
     *
     * @param string $address
     * @return Issue
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string 
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set issueDescription
     *
     * @param string $issueDescription
     * @return Issue
     */
    public function setIssueDescription($issueDescription)
    {
        $this->issueDescription = $issueDescription;

        return $this;
    }

    /**
     * Get issueDescription
     *
     * @return string 
     */
    public function getIssueDescription()
    {
        return $this->issueDescription;
    }

    /**
     * Set telephone
     *
     * @param string $telephone
     * @return Issue
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone
     *
     * @return string 
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

     public function getAbsolutePath()
    {
    	return null === $this->filePath
    	? null
    	: $this->getUploadRootDir().'/'.$this->filePath;
    }
    
    public function getWebPath()
    {
    	return null === $this->filePath
    	? null
    	: $this->getUploadDir().'/'.$this->filePath;
    }
    
    protected function getUploadRootDir()
    {
    	// the absolute directory path where uploaded
    	// documents should be saved
    	

    	return __DIR__.'/../../../../web/'.$this->getUploadDir();
    }
    
    protected function getUploadDir()
    {
    	// get rid of the __DIR__ so it doesn't screw up
    	// when displaying uploaded doc/image in the view.
    	return 'uploads/documents';
    }
    
    public function upload()
    {
    	// the file property can be empty if the field is not required
    	
    	if (null === $this->getFile()) {

    		return null;
    	}
    	
   		$this->originalFileName = $this->getFile()->getClientOriginalName();
		$this->fileName = md5(uniqid(rand(), true)) . '.' . $this->getFile()->guessExtension();
		
		//$this->fileName = $this->getFile()->getClientOriginalName();
		$this->filePath = $this->getUploadRootDir();
		
    
    	// use the original file name here but you should
    	// sanitize it at least to avoid any security issues
    
    	// move takes the target directory and then the
    	// target filename to move to
    	
    	
    	
    	$this->getFile()->move(
    			$this->getUploadRootDir(),
    			$this->fileName
    	);
    	

    
    	// set the path property to the filename where you've saved the file
    	
    	
    
    	// clean up the file property as you won't need it anymore
    	$this->file = null;
    }
    
    public function getFilePath() 
    {
    	return $this->filePath;
    }
    
    public function getCityZipCode() 
    {
    	return $this->cityZipCode;
    }
    
    public function setCityZipCode($cityZipCode)
    {
    	$this->cityZipCode = $cityZipCode;
    }
    
    public function getStreet()
    {
    	return $this->street;
    }
    
    public function setStreet($street)
    {
    	$this->street = $street;
    }
    
    public function getOriginalFileName() 
    {
    	return $this->originalFileName;
    }
    
    public function getPostedAt() 
    {
    	return $this->postedAt;
    }
    
}
