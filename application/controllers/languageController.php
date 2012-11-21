<?php
class LanguageController extends CI_Controller{
	public function index()
		{
			session_start();
			/*Reciving the data sended from the select menu. Now we can do what ever we want from this data*/
			$langCode = $this->input->post('langCode');
			$langName = $this->input->post('langName');
			
			$_SESSION['langCode'] = $langCode;
			$_SESSION['langName'] = $langName;
			
			if($langCode =="" && $langName=""){
				$langName = 'Välj...';
			}else{
				$langArr = array
				(
					'langCode' =>$langCode,
					'langName' =>$langName
				);
			}
			echo json_encode($langArr);
			
			
	}
}