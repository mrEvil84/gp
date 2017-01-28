<?php
namespace Gosia\GosiaPageBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Validator\Constraints;


class SearchType extends AbstractType{
	
    private $keyword;

    public function __construct($keyword = null) {
        $this->keyword = $keyword;
    }

    /**
     * Return form for UsageSearch
     * @param FormBuilderInterface $builder FormType Class (eg. UsageSearchType, this class)
     * @param array $options form options
     * @example $searchForm = $this->createForm(new SearchType(), array());
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder->add(
                $options['data']['keyword_name'],
                'text',
                [
                    'label' => false,
                    'required' => false,
                    'empty_data' => null,
                    'data' => $this->keyword,
                ]
        );

        $builder->add('issue_submit_button', 'submit', array('label' => 'Szukaj'));
    }

    /**
     * Returns the name of this type.
     * @return string The name of this type
     */
    public function getName()
    {
        return 'searchForm';
    }
}