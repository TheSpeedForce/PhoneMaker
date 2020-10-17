/*********************************************************
    FILENAME: f1nalr3l3a&e.js
    AUTHOR: Pawas Aggarwal
	CREATE DATE: 02-May-2020
    PURPOSE: Final project final release javascript
    LAST MODIFIED ON: 02-May-2020
	LAST MODIFIED BY: Pawas Aggarwal
    MODIFICATION HISTORY:
	Original Build
*********************************************************/


$(document).ready(function(){
	/*******************
			
			jQuery UI 
	
	*******************/
	$( "#accordion" ).accordion();

	//phone color autocomplete tags
	var availableTags = [
		"blue",
		"black",
		"red",
		"white",
		"green",
		"gold",
		"rose"
	];
	
	$( "#color" ).autocomplete({
		source: availableTags
	});


	$( "#button" ).button();
	
	$( "#button-icon" ).button({
		icon: "ui-icon-gear",
		showLabel: false
	});


	$( "#radioset" ).buttonset();


	$( "#controlgroup" ).controlgroup();


	$( "#tabs" ).tabs();


	$( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});

	// Link to open the dialog
	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});


	$( "#datepicker" ).datepicker({
		inline: true,
		minDate: 45,                         //setting limit as required by the form
		maxDate: 90,
		dateFormat: "DD, d MM, yy"           //To get the date with day of the week
	});


	//slider with limits for screen size
	$( "#slider" ).slider({
		range: true,
		min: 3.5,
		max: 7.5,
		step: 0.1,
		values: [ 5.5, 6.5 ],         //default value
		slide: function( event, ui ) {
			$( "#size" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );       //to show the value in "input id = "size""
		}
	});


	$( "#progressbar" ).progressbar({
		value: 20
	});


	$( "input[type='radio']" ).checkboxradio({		// Radio buttons
		icon: false			// hide icon
	});


	$( "input[type='checkbox']" ).checkboxradio({	// Checkboxes
		icon: false			// hide icon
	});


	$( "#spinner" ).spinner();


	$( "#menu" ).menu();


	$( "#tooltip" ).tooltip();


	$( "#selectmenu" ).selectmenu();


	//customizing buttons for the theme
	$( "input[type='reset']" ).button();
	$( "input[type='submit']" ).button();

	// Hover states on the static widgets
	$( "#dialog-link, #icons li" ).hover(
		function() {
			$( this ).addClass( "ui-state-hover" );
		},
		function() {
			$( this ).removeClass( "ui-state-hover" );
		}
	);
	/* End jQuery UI */
	
	/****************
	
		jQuery Validation Plug-in
			
	****************/
	$.validator.setDefaults(
	{
		//calling custom function on submit
		submitHandler: output,
		
		//showing error message after the input element
		errorPlacement: function (error, element) {
        	error.insertAfter(element);
		} 
	});
	
	/* End Plug-in */

	/* 	Function
	=================================================================
		NAME: output
		PURPOSE: 	
			Scrape form and store the values into variabless
			Create the string for output generated from values of variables.
		PARAMETERS: 
			None
		RETURN VALUE: 
			None
	=================================================================
	*/
	function output(){
		
		var nameVal = $("#name").val();                         //string that holds value from "input id = "name""
		
		var colorVal = $("#color").val();						//string that holds value from "input id = "color""
		
		var taglineVal = $("#tagline").val();					//string that holds value from "input id = "tagline""
		
		var sizeVal = $("#size").val();							//string that holds value from "input id = "size""
		
		var ramVal = $("input[name=ram]:checked").val(); 		//string that holds value from "input name = "ram""
		
		var romVal = $("input[name=rom]:checked").val();  		//string that holds value from "input name = "rom"
		
		var features = []; 										//array to hold values from checkboxes
		
		$('input[type="checkbox"]:checked').each(function(i,e){features.push(e.value);});    //addding checked values of checkboxes to array
		
		var featuresVal = features.join(',');                   //string created using joining the elements from features array
		
		var phoneId = Math.floor(Math.random()*10000000);       //integer created using Math.random to create random number for phone ID
		
		var emailVal = $("#email").val(); 						//string that holds value from "input id = "email""
		
		var passwordVal = $("#password").val();					//string that holds value from "input id = "password""
		
		var mobNoVal = $("#mobno").val();						//string that holds value from "input id = "mobno""
		
		var addrVal = $("#addr").val(); 						//string that holds value from "input id = "addr""
		
		var dodVal = $("#datepicker").val();					//string that holds value from "input id = "datepicker""  
		
		var strOutput =                                     	//string created using the above variables
		"-----------------------------<br>"+
		"Here are your phone details:<br>"+
		"<b>Phone Name:</b> " + nameVal + " <br> " + 
		"<b>Phone Color:</b> " + colorVal + " <br> " + 
		"<b>Phone Tagline:</b> " + taglineVal + " <br> " + 
		"<b>Screen Size Range:</b> " + sizeVal + " inches <br> " + 
		"<b>RAM:</b> " + ramVal + " <br> " +
		"<b>ROM:</b> " + romVal + " <br> " +
		"<b>Extra Features:</b> " + featuresVal + " <br> " +
		"You have made an excellent phone, your custom phone ID is <b>" + phoneId +"</b>. <br>" +
		"Thank you for choosing our service. The phone with phone ID <b>" + phoneId + 
		"</b> will be delivered to <b>" + addrVal + 
		"</b> by <b>" + dodVal +
		"</b>. A confirmation email has been sent to <b>" + emailVal + 
		"</b> and an sms has been sent to <b>" + mobNoVal + "</b> as well.<br>" +
		"Your password is <b>" + passwordVal + "</b> if you ever wish to change it";
		
		$("#output").hide();                                      //hide "output" area to change without user noticing
		document.getElementById("output").innerHTML = strOutput;  //set "output" value to strOuput
		$("#output").fadeIn();                                    //show new "output" with animation
		
	} /* End function */
	
	/***************
		jQuery Form Validation
	****************/
	$("#phoneForm").validate({             
		rules: {                               //rules for validation
			name: {	
				required: true,
				maxlength: 15
			},
			
			color: {
				required: true,
				lettersonly: true
			},
			
			email: {							
				required: true,
				email: true           
			},
			
			password: {							
				required: true,
				minlength: 6
			},
			
			mobno: {							
				required: true,
				digits: true,
				minlength: 10,          
				maxlength: 10
			},
			
			datepicker: {								
				required: true,
				date: true
			},
			
			addr: {							
				required: true,
			},
		}, // end rules
		messages: {                             //These messages are displayed when user input doesn't match the rules
			name: {							
				required: " Please give the phone a name.",
				maxlength: $.validator.format(" Phone name cannot be more than 15 characters.")
			},
			
			color: {
				required: " Please choose a color for the phone.",
				lettersonly: " Only alphabets allowed for color."
			},
			
			email: {							
				required: " Please enter an email for verification.",
				email: " Please enter a valid email address."
			},
			
			password: {							
				required: " Please set a password.",
				minlength: " Please enter a password longer than 6 characters"
			},
			
			mobno: {							
				required: " Please enter a phone number for communication.",
				digits: " Only digits 0-9 are allowed",
				minlength: " Phone number cannot be less than 10 numbers.",
				maxlength: " Phone number cannot be more than 10 numbers."
			},
			
			datepicker: {								
				required: " Please enter a date. ",
				date: " Please enter a valid date. "
			},
			
			addr: {							
				required: " Please enter an address to receive your phone.",
			},
		}  // end messages
	});
	/* End Validation plugin */
	
	/**************
		Disabling alphabet input for phone number.
	**************/
	$('#mobno').on('keypress', function(key) {               
        if(key.charCode < 48 || key.charCode > 57) {          //check if entered key is a number
				maxlength: 10                                 //make sure maximum number of entered key is 10
			return false;                                     // if entered key is not number, return false to disable
		}
	});
	
	$("#resetform").click(function(){                            //reset form and output
		(document).getElementById("output").innerHTML = "";      //make output blank
	});
});	

	
	