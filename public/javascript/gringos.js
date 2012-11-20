/*Customize radio buttons*/
function initCustomizedRadios(){
	var radios = $('input[type="radio"]'),
		radioGroupName,
		className = 'customizedRadio',
		selectedRadio = 'selected',
		checked = 'checked';

	radios.each(function(){		
		$(this).hide();	
		radioGroupName = $(this).attr('name');
		
		$(this).parent().append('<span class="'+className+' '+ radioGroupName +'" name="'+radioGroupName+'"></span>');
		customRadio = $(this).siblings('span.'+className+'.'+ radioGroupName).attr('name', radioGroupName);
		
		if($(this).is(':checked') || $(this).attr('checked') == 'checked' ){
			customRadio.addClass(selectedRadio)
		}else{
			customRadio.removeClass(selectedRadio)
		}
	});	

	radios.siblings('span.'+className).click(function(){
		var currentName = $(this).attr('name');
		radios.siblings('span.'+className+'.'+currentName).each(function(){
			$(this).removeClass(selectedRadio);
		});
		$(this).addClass(selectedRadio).siblings(radios).attr(checked,checked);
	});
}

/*Customize standard html select menus*/
function initCustomizedSelectMenus(mySelectArr){
	for(var i = 0; i< mySelectArr.length; i++){
	var
		id = mySelectArr[i].attr('id'),
		selectedValue = "selected",
		optionsVal,
		optionsTxt,
		mySelectHtml,
		mySelect;
		
		mySelectArr[i].hide();
	
		mySelectHtml = '<ul class="customizedSelect '+id+'">';
		mySelectHtml += '<li class="openDropdown">';
		mySelectHtml += '<span class="selectArrow"></span>';
		mySelectHtml += '</li>';
		mySelectHtml += '<li class="selected openDropdown">';
		mySelectHtml += '<a >Välj...</a>';
		mySelectHtml += '</li>';
		mySelectHtml += '<li class="dropdownHolder">';
		mySelectHtml += '<ul class="dropdown'+id+'" style="display:none">';
		/*Loop through all options and make li elements of it*/
		mySelect = $('option',mySelectArr[i]);
		mySelect.each(function(){
			optionsVal = $(this).attr('value'),
			optionsTxt = $(this).text();
			mySelectHtml += '<li class='+optionsVal+'>'+optionsTxt+'</li>';
		});
		
		mySelectHtml += '</ul>';
		mySelectHtml += '</li>';
		mySelectHtml += '</ul>';

		mySelectArr[i].parent().append(mySelectHtml);
	}
	
	/*On click submit Selected row*/
	var $selectedRow = $('ul.customizedSelect').children('li.dropdownHolder').children('ul').find('li');
	$selectedRow.click(function(){
		var
		cObj= $(this);
		langCode = cObj.attr('class'),
		langName = cObj.text(),

		submitSelect(langName, langCode, cObj);
	});
	/*Update selected value*/
	updateSelectedValue = function(langName, langCode, cObj){
		cObj.closest('ul.customizedSelect').find('li.selected').html('<a class='+langCode+'>'+langName+'</a>');
		cObj.parent('ul').hide();
		
	}
	
	/*Submit value*/
	submitSelect = function(langName, langCode, cObj){
		$.ajax({
			url:'index.php/start/test/',
			type:'POST',
			data:{langCode:langCode, langName:langName},
			dataType:'JSON',
			success: function(data){
			/*We send the data to the controller and get the value back. When the value has arrived we call updateSelectvalue and send the value to update the menu*/
				updateSelectedValue(data.langName, data.langCode, cObj);
			}
		});
	}

	var $dropdown = $('ul.customizedSelect').find('li.openDropdown');
	$dropdown.click(function(){
		obj = $(this);
		dropDownShowHide(obj);
	});
	
	/*Open/Close select list*/
	dropDownShowHide = function(obj){
		var dropdown = obj.siblings('li.dropdownHolder').find('ul');
		if(dropdown.css('display')=='none'){
			dropdown.show();
		}else{
			dropdown.hide();
		}
	}
}

function initStopEmptyLinks(){
	var $link = $('a');
	$link.click(function(e){
		var href = $(this).attr('href');
		if(href == "#" || href==""){
			e.preventDefault();
		}
	});
}

function initDropdowns(){
	var $triggerHolder = $('.trigger'),
		targets = $('.target');
	$triggerHolder.each(function(){
		var 
		trigger = $(this).find('.opener', $triggerHolder),
		target = $(this).closest($triggerHolder).siblings(targets);
		trigger.click(function(){
			if(target.css('display')=='none'){
				target.show();
			}else{
				target.hide();
			}
		});
	});
}

/*
 * INITIALIZE ALL FUNCTIONS HERE WHEN DOCUMENT IS READY
 * 														*/
$(document).ready(function(){
	/*Creates customized radiobuttons*/
	initCustomizedRadios();
	
	/*Create cutomized select menus
	 * To cusomize select menu pass the selector for the select menu as a parameter in the array (mySelectArr)
	 * You need to specify the exact select menu. I recomend use a id*/
	var mySelectArr = [$("select#lang")];
	initCustomizedSelectMenus(mySelectArr);
	
	/*Prevent empty links to submit*/
	initStopEmptyLinks();
	
	/*Create dropdown menus
	 * Whats important here is that when creating a dropdown we have to use a structure like the following
	 * We need a div or what ever with a trigger class inside the trigger div we need to add a div or what ever
	 * with a opener class. Outside the trigger div we will create our target(dropdown div).*/
	initDropdowns();
});