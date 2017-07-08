
// ****************** Startseite *****************// 

$(document).ready(function() {
	$('.entdecken').click(function(){
    	$('#content').show(2000);
		$('#Landing_Page').hide(2000);
    });
});





// ****************** Projekte *****************// 


$(document).ready(function() {
  $('#Oakmania').hide();
	$('#link_oakmania').click(function(){
    	$('#Oakmania').show();
    })
});

$(document).ready(function() {
  $('#Oakmania_P').hide();
	$('.Praesentation_button').click(function(){
    	$('#Oakmania_P').show('');
    })
});






