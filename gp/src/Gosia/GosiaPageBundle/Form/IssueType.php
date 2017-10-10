<?php

namespace Gosia\GosiaPageBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Validator\Constraints;


class IssueType extends AbstractType
{
	
	/**
	 * @var array
	 */
	private $params;

	
	/**
	 * 
	 * @param string $params
	 */
	public function __construct($params = null) {
		$this->params = $params;
	}
	
	
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->setMethod('POST');
        $builder->add('name', 'text', array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('surname', 'text', array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('email','email', array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('street', 'text', array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('cityZipCode', 'text', array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('issueDescription', 'textarea', array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('telephone', 'text', array('label'=>false,'required'=> false,'empty_data'  => null));
        
        if (! empty ( $this->params ) && array_key_exists ('file', $this->params)) {
        } else {
        	$builder->add('file', 'file', array('label'=>false,'required'=> false,'empty_data'  => null));
        }
        
		if (! empty ( $this->params ) && array_key_exists ('status', $this->params)) {
			if($this->params['status'] == null) {
				$builder->add ( 'status', 'choice', array (
						'choices' => array (
								0 => 'Nowe',
								1 => 'W trakcie',
								2 => 'Zrobione',
								3 => 'Wysłane'
						),
						'required' => false,
				) );
			} else {
				$builder->add ( 'status', 'choice', array (
						'choices' => array (
								0 => 'Nowe',
								1 => 'W trakcie',
								2 => 'Zrobione',
								3 => 'Wysłane'
						),
						'required' => false,
						'data' => $this->params['status'],
				) );
			}
		}

        
        
        if(!empty($this->params) && array_key_exists('captha', $this->params)) {
        } else {
        	$builder->add('captcha', 'captcha', array( 'label' => false,
        			'width' => 200,
        			'height' => 150,
        			'length' => 4,
        	));
        }
        
        if(!empty($this->params) && array_key_exists('submit_label', $this->params)) {
        	$builder->add('issue_submit_button', 'submit', array('label'=>$this->params['submit_label']));
        } else {
        	$builder->add('issue_submit_button', 'submit', array('label'=>'Send'));
        }
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {

		$resolver->setDefaults(array(
			'data_class'      => 'Gosia\GosiaPageBundle\Entity\Issue',
			'csrf_protection' => true,
			'csrf_field_name' => '_token',
			// a unique key to help generate the secret token
			'intention'       => 'issue_item',
		));

    }

    /**
     * Get IssueType name
     * @return string
     */
    public function getName()
    {
        return 'gosia_page_issue_type';
    }
}

//Captha : https://github.com/Gregwar/CaptchaBundle
