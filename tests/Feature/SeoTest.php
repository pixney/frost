<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;
use Statamic\Facades\Entry;
use Statamic\Facades\GlobalSet;


class SeoTest extends TestCase
{

    protected $pageId = "bb2798a8-554e-4244-9fc9-90ff9dac3d4f";
    protected $homePage;
    protected $globalSeo;

    protected function setUp(): void
    {
        parent::setUp();
        $this->homePage = \Statamic\Facades\Entry::find($this->pageId);
        $this->globalSeo = GlobalSet::findByHandle('seo')->inDefaultSite();
    }

    protected function tearDown(): void
    {
        $this->globalSeo->set('noindex_local', true)->save();
        $this->homePage->set('title', 'Frost Homepage By Pixney')->save();
        $this->homePage->set('seo_title', '')->save();
        $this->homePage->set('seo_description', '')->save();
        $this->homePage->set('seo_description_fallback_field', 'I am the seo description fallback field')->save();
        $this->homePage->set('seo_noindex', false)->save();
        $this->homePage->set('seo_nofollow', false)->save();
        parent::tearDown();

    }


    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_displays_page_title()
    {
        $response = $this->get('/');
        $response->assertSee('Frost Homepage By Pixney');
    }

    public function test_use_fallback_value_for_meta_description()
    {
        $this->homePage->set('seo_description', '')->save();
        $response = $this->get('/');
        $response->assertSee('I am the seo description fallback field', $escaped = false);
    }


    public function test_displays_meta_description()
    {
        $this->homePage->set('seo_description', 'A barebone Statamic Starter kit for scaffolding your web projects faster.')->save();
        $response = $this->get('/');
        $response->assertSee('<meta name="description" content="A barebone Statamic Starter kit for scaffolding your web projects faster.">', $escaped = false);
    }

    public function test_og_title_is_same_as_page_title_if_not_defined()
    {
        $response = $this->get('/');
        $response->assertSee('<meta property="og:title" content="Frost Homepage By Pixney">', $escaped = false);
    }

    public function test_og_title_displays_its_value_if_entered()
    {
        $this->homePage->set('og_title', 'Frost Homepage By Pixney OG')->save();

        $response = $this->get('/');
        $response->assertSee('<meta property="og:title" content="Frost Homepage By Pixney OG">', $escaped = false);

        $this->homePage->set('og_title', '')->save();
    }

    public function test_displays_og_description()
    {
        $this->homePage->set('seo_description', 'A barebone Statamic Starter kit for scaffolding your web projects faster. OG')->save();
        $response = $this->get('/');
        $response->assertSee('<meta property="og:description" content="A barebone Statamic Starter kit for scaffolding your web projects faster. OG">', $escaped = false);
    }

    public function test_json_ld_global_org_type()
    {
        $response = $this->get('/');
        $response->assertSee('"@type": "Organization"', $escaped = false);
    }

    public function test_json_ld_global_org_name()
    {
        $response = $this->get('/');
        $response->assertSee('"name": "json_ld_organisation_name"', $escaped = false);
    }

    public function test_noindex_isset_if_set_in_global_but_not_on_page_level()
    {
        $this->globalSeo->set('noindex_local', true)->save();
        $this->homePage->set('seo_noindex', false)->save();
        $response = $this->get('/');
        $response->assertSee('<meta name="robots" content="noindex, nofollow">', $escaped = false);
    }

    public function test_noindex_isset_if_set_in_global_but_also_on_page_level()
    {
        $this->globalSeo->set('noindex_local', true)->save();
        $this->homePage->set('seo_noindex', true)->save();
        $response = $this->get('/');
        $response->assertSee('<meta name="robots" content="noindex, nofollow">', $escaped = false);
    }

    public function test_noindex_is_set_on_page_level()
    {
        $this->globalSeo->set('noindex_local', false)->save();
        $this->homePage->set('seo_noindex', true)->save();
        $response = $this->get('/');
        $response->assertSee('<meta name="robots" content="noindex">', $escaped = false);
    }

    public function test_nofollow_is_set_on_page_level()
    {
        $this->globalSeo->set('noindex_local', false)->save();
        $this->homePage->set('seo_noindex', false)->save();
        $this->homePage->set('seo_nofollow', true)->save();
        $response = $this->get('/');
        $response->assertSee('<meta name="robots" content="nofollow">', $escaped = false);
    }

    public function test_noindex_nofollow_is_set_on_page_level()
    {
        $this->globalSeo->set('noindex_local', false)->save();
        $this->homePage->set('seo_noindex', true)->save();
        $this->homePage->set('seo_nofollow', true)->save();
        $response = $this->get('/');
        $response->assertSee('<meta name="robots" content="noindex, nofollow">', $escaped = false);
    }

    public function test_allow_robots_if_nothing_is_set_against_it()
    {
        $this->globalSeo->set('noindex_local', false)->save();
        $this->homePage->set('seo_noindex', false)->save();
        $this->homePage->set('seo_nofollow', false)->save();
        $response = $this->get('/');
        $response->assertSee('<meta name="robots" content="all">', $escaped = false);
    }


}
