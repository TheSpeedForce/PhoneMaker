/*
    Filename: simpf0rmval1d.js
    Written by: Pawas Aggarwal
    Purpose: To use for final project form validation.
    Date: 24-Apr-2020
    Modification History:
	Original Build
*/
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
$( "#autocomplete" ).autocomplete({
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

$(document).ready(function(){
	//$('#submitform').click(output);
	
	$.validator.setDefaults(
	{
		submitHandler: output,
		errorPlacement: function (error, element) {
        	error.insertAfter(element);
		} 
	});
	
		
	function output(){
		var nameVal = $("#name").val();
		var colorVal = $("#autocomplete").val();
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
		
		"Here are your phone details:<br>"+
		"<b>Phone Name:</b> " + nameVal + " <br> " + 
		"<b>Phone Color:</b> " + colorVal + " <br> " + 
		"<b>Phone Tagline:</b> " + taglineVal + " <br> " + 
		"<b>Screen Size Range:</b> " + sizeVal + " inches <br> " + 
		"<b>RAM:</b> " + ramVal + " <br> " +
		"<b>ROM:</b> " + romVal + " <br> " +
		"<b>Extra Features:</b> " + features + " <br> " +
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
	$("#phoneForm").validate();

	$("#resetform").click(function(){
		(document).getElementById("output").innerHTML = "";
	});
});		 