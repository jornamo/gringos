<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Start extends CI_Controller {
	public function index()
	{
		$data = array('title' => 'Gringos | Start');
		/*Loads the url helper*/
		$this->load->helper('url');
		
		/*Load the html template and send variable title to the page*/
		$data['content'] = $this->load->view('start_view/start_view', NULL, TRUE);
		$data['css'] = $this->load->view('tags/css_tags', NULL, TRUE);
		$data['javascript'] = $this->load->view('tags/javascript_tags', NULL, TRUE);
		$data['metas'] = $this->load->view('tags/meta_tags', NULL, TRUE);
		$this->load->view('template', $data);
		
		
	}
}