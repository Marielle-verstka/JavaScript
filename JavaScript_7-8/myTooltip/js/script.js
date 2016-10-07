$(function() {

	$('#button').on('click', function() {
		$('.help').show('slow');
	});

	$(':text').on('mouseenter', function() {
		$(this).parent().next().show('slow');
	});

	$(':text').on('mouseleave', function() {
		$(this).parent().next().hide('slow');
	});
	
});	


