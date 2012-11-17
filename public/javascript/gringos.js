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
		var  currentName = $(this).attr('name');
		radios.siblings('span.'+className+'.'+currentName).each(function(){
			$(this).removeClass(selectedRadio);
		});
		$(this).addClass(selectedRadio).siblings(radios).attr(checked,checked);
	});
}

function initCustomizedSelectMenus(mySelectArr){
	for(var i = 0; i< mySelectArr.length; i++){
	var
		id = mySelectArr[i].attr('id'),
		selectedValue = "selected",
		optionsVal,
		optionsTxt,
		mySelectHtml;
		
		mySelectArr[i].hide()
	
		mySelectHtml = '<ul class="customizedSelect '+id+'">';
		mySelectHtml += '<li class="openDropdown">';
		mySelectHtml += '<span class="selectArrow">-></span>';
		mySelectHtml += '</li>';
		mySelectHtml += '<li class="selected openDropdown">';
		mySelectHtml += '<a >Välj...</a>';
		mySelectHtml += '</li>';
		mySelectHtml += '<li class="dropdownHolder">';
		mySelectHtml += '<ul class="dropdown'+id+'" style="display:none">';
		/*Loop through all options and make li elements of it*/
		mySelectArr[i].find('option').each(function(){
			optionsVal = $(this).attr('value'),
			optionsTxt = $(this).text();
			mySelectHtml += '<li class='+optionsVal+'>'+optionsTxt+'</li>';
		});
		
		mySelectHtml += '</ul>';
		mySelectHtml += '</li>';
		mySelectHtml += '</ul>';

		mySelectArr[i].parent().append(mySelectHtml);
	}
	
	/*Update selected value*/
	$('ul.customizedSelect').children('li.dropdownHolder').children('ul').find('li').click(function(){
		var
			selectedValue = $(this).attr('class'),
			selectedName = $(this).text(),
			submitMe;
		
		$(this).closest('ul.customizedSelect').find('li.selected').html('<a class='+selectedValue+'>'+selectedName+'</a>');
		submitMe = $(this).closest('ul.customizedSelect').find('li.selected a');
		submitSelect(submitMe);
	});
	
	/*Submit value*/
	submitSelect = function(submitMe){
		var 
			val = submitMe.attr("class"),
			text = submitMe.text();

		/*
		 * TODO
		 * Send value to controller*/
	}

	$('ul.customizedSelect').find('li.openDropdown').click(function(){
		obj = $(this);
		dropDownShowHide(obj);
	})
	
	/*Open/Close select list*/
	dropDownShowHide = function(obj){
		var dropdown = obj.siblings('li.dropdownHolder').find('ul');
		if(dropdown.css('display')=='none'){
			dropdown.show();
		}else{
			dropdown.hide()
		}
	}
}

/*
 * INITIALIZE ALL FUNCTIONS HERE WHEN DOCUMENT IS READY
 * 														*/
$(document).ready(function(){
	/*Creates customized radiobuttons*/
	initCustomizedRadios();
	
	/*Create cutomized select menus
	 * To cusomize select menu add the selector here
	 * You need to specify the exact selec menu so i recomend use a id*/
	var mySelectArr = [$("select#one")];
	initCustomizedSelectMenus(mySelectArr);
});