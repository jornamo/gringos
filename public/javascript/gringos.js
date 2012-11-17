function initCustomizedRadios(){
	var 
		radios = $('input[type="radio"]'),
		radioGroupName,
		className = 'customizedRadio',
		selectedRadio = 'selected',
		checked = 'checked';

	radios.each(function(){
		/*Hide all the standard radios in the page*/
		
		$(this).hide();	
		/*Get the name och the radio*/
		radioGroupName = $(this).attr('name');
		
		/*
		 * For each radiobutton select the parent of the radiobutton and add a <span> with the 
		 * name of the radio and a class wich have the image of the customized radio and the name of the original radio
		 * 																													*/
		
		$(this).parent().append('<span class="'+className+' '+ radioGroupName +'" name="'+radioGroupName+'"></span>');
		
		/*When page is loaded if any radio is selected show the selected customized button*/
		customRadio = $(this).siblings('span.'+className+'.'+ radioGroupName).attr('name', radioGroupName);
		
		if($(this).is(':checked') || $(this).attr('checked') == 'checked' ){
			customRadio.addClass(selectedRadio)
		}else{
			customRadio.removeClass(selectedRadio)
		}
	});	
	
	/* Add click function on all spans with the name customizedRadio
	 * Get the currentName och the clicked customizedRadio and check if any other customizedRadio has the same name it its class
	 * Loop throug all the radios with the currentName and remove selectedRadio class from it and at the and add selectedRadio class
	 * To the customizedRadio we clicked on and add checked attribute to its real hidden input radio */
	radios.siblings('span.'+className).click(function(){
		var  currentName = $(this).attr('name');
		radios.siblings('span.'+className+'.'+currentName).each(function(){
			$(this).removeClass(selectedRadio);
		});
		$(this).addClass(selectedRadio).siblings(radios).attr(checked,checked);
	});
}

/*
 * INITIALIZE ALL FUNCTIONS HERE WHEN DOCUMENT IS READY
 * 														*/
$(document).ready(function(){
	/*Creates customized radiobuttons*/
	initCustomizedRadios();
	
});