<?php

namespace Gosia\GosiaPageBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Gregwar\CaptchaBundle\Type\CaptchaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Validator\Constraints;


class IssueType extends AbstractType
{
    const CAPTHA_WIDTH = 200;
    const CAPTHA_HEIGHT = 150;
    const CAPTHA_LENGTH = 4;

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
     * @return array
     */
    private function getChoices() {
        return [
            0 => 'Nowe',
            1 => 'W trakcie',
            2 => 'Zrobione',
            3 => 'Wysłane'
        ];
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->setMethod('POST');
        $builder->add('name', TextType::class, array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('surname', TextType::class, array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('email',TextType::class, array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('street', TextType::class, array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('cityZipCode', TextType::class, array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('issueDescription', TextareaType::class, array('label'=>false,'required'=> true,'empty_data'  => null));
        $builder->add('telephone', TextType::class, array('label'=>false,'required'=> false,'empty_data'  => null));
        
        if (false === empty( $this->params ) && array_key_exists('file', $this->params)) {
            $builder->add('file', FileType::class, array('label'=>false,'required'=> false,'empty_data'  => null));
        }
        
	if (false === empty($this->params) && array_key_exists('status', $this->params)) {
            if (null === $this->params['status']) {
                $builder->add('status', ChoiceType::class, array(
                    'choices' => $this->getChoices(),
                    'required' => false,
                ));
            } else {
                $builder->add('status', ChoiceType::class, array(
                    'choices' => $this->getChoices(),
                    'required' => false,
                    'data' => $this->params['status'],
                ));
            }
        }

        if (false === empty($this->params) && array_key_exists('captha', $this->params)) {
            $builder->add('captcha', CaptchaType::class, array('label' => false,
                'width' => self::CAPTHA_WIDTH,
                'height' => self::CAPTHA_HEIGHT,
                'length' => self::CAPTHA_LENGTH,
            ));
        }

        if (false === empty($this->params) && array_key_exists('submit_label', $this->params)) {
            $builder->add('issue_submit_button', SubmitType::class, array('label'=>$this->params['submit_label']));
        } else {
            $builder->add('issue_submit_button', SubmitType::class, array('label'=>'Send'));
        }
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver) {
        $resolver->setDefaults(array(
            'data_class' => 'Gosia\GosiaPageBundle\Entity\Issue',
            'csrf_protection' => true,
            'csrf_field_name' => '_token',
            // a unique key to help generate the secret token
            'intention' => 'issue_item',
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
