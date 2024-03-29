<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Start extends CI_Controller {
	public function index()
	{
		session_start();
		
		$data = array('title'=>'Gringos | Start');
 		$langSession = array('langCode'=> $_SESSION['langCode'], 'langName' => $_SESSION['langName']);
		/*Loads the url helper*/ 
		$this->load->helper('url');
		
		/*Load the html template and send variable title to the page*/
		/*Loads meta data, css files, and javascript*/
		$data['css'] = $this->load->view('tags/css_tags', NULL, TRUE);
		$data['javascript'] = $this->load->view('tags/javascript_tags', NULL, TRUE);
		$data['metas'] = $this->load->view('tags/meta_tags', NULL, TRUE);
		/*Loads overall header*/
		$data['header'] = $this->load->view('tags/header_tag', NULL, TRUE);

		/*The content variable should be different for every page but the rest is the same because we will show header
		 * footer navigationbar, css, javascript, and metatags on every page. So on every page controller we will load this but we need to change
		 * the content variable so we load the correct content to the page.*/
		$data['content'] = $this->load->view('start_view/start_view', $langSession, TRUE);
		
		$data['footer'] = $this->load->view('tags/footer_tag', NULL, TRUE);
		
		/*loads whole page*/
		$this->load->view('template', $data);
	}
}