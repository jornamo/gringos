<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Start extends CI_Controller {
	public function index()
	{
		$data = array('title' => 'Gringos');
		
		/*Lads the url helper*/
		$this->load->helper('url');
		
		/*Load the html template and send variable title to the page*/
		$data['content'] = $this->load->view('start_view/start_view', NULL, TRUE);
		$this->load->view('template', $data);
		
	}
}