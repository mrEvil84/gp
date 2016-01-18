<?php

namespace Gosia\GosiaPageBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{

    public function testPolishIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertGreaterThan(
            0,
            $crawler->filter('html:contains("Strona główna")')->count()
        );
    }

    /*
    public function testGermanIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/setLanguage/de');

        $this->assertTrue($crawler->filter('html:contains("Startseite")')->count() > 0);
    }
    */


}
