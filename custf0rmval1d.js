/*
    Filename: custf0rmval1d.js
    Written by: Pawas Aggarwal
    Purpose: To use for final project custom form validation.
    Date: 27-Apr-2020
    Modification History:
	Original Build
*/


$(document).ready(function(){
	/*******************
			
			jQuery UI 
	
	*******************/
	$( "#accordion" ).accordion();

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
		minDate: 45,
		maxDate: 90,
		dateFormat: "DD, d MM, yy"
	});



	$( "#slider" ).slider({
		range: true,
		min: 3.5,
		max: 7.5,
		step: 0.1,
		values: [ 5.5, 6.5 ],
		slide: function( event, ui ) {
			$( "#size" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
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



	$( "#spinner" ).spinner({
		step: 0.5,
		min: 3.5,
		max: 7,
	});



	$( "#menu" ).menu();



	$( "#tooltip" ).tooltip();



	$( "#selectmenu" ).selectmenu();

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
	
	
	/****************
	
		jQuery Validation Plug-in
			
	****************/
	$.validator.setDefaults(
	{
		submitHandler: output,
		errorPlacement: function (error, element) {
        	error.insertAfter(element);
		} 
	});

	/* 	Function
	=================================================================
		Name: output
		Purpose: 	Scrape form and store the values into variabless.
					Create the string for output generated from values of variables.
		Return Value: None
	=================================================================
	*/
	function output(){
		var nameVal = $("#name").val();
		var colorVal = $("#color").val();
		var taglineVal = $("#tagline").val();
		var sizeVal = $("#size").val();
		var ramVal = $("input[name=ram]:checked").val(); 
		var romVal = $("input[name=rom]:checked").val();  
		var features = []; 
		$('input[type="checkbox"]:checked').each(function(i,e){features.push(e.value);});
		var featuresVal = features.join(',');
		var phoneId = Math.floor(Math.random()*10000000);
		var emailVal = $("#email").val();
		var passwordVal = $("#password").val();
		var mobNoVal = $("#mobno").val();
		var addrVal = $("#addr").val(); 
		var dodVal = $("#datepicker").val();  
		
		var strOutput = 
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
		$("#output").hide();
		document.getElementById("output").innerHTML = strOutput;
		$("#output").fadeIn();
		
	}
	
	/***************
		jQuery Form Validation
	****************/
	$("#phoneForm").validate({             
		rules: {
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
				email: true           //custom form validation challenge
			},
			password: {							
				required: true,
				minlength: 6
			},
			mobno: {							
				required: true,
				digits: true,
				minlength: 10,          //custom form validation challenge (valid mobile numbers are 10-digits long)
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
		messages: {                             // These messages are displayed when user input doesn't match the rules
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
        if(key.charCode < 48 || key.charCode > 57) {          //custom form validation challenge
				maxlength: 10
			return false;
		}
	});
	$("#resetform").click(function(){
		(document).getElementById("output").innerHTML = "";
	});
});	

	
	