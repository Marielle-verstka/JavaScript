$(function() {
	$(".navigation-tabs a[href^='#']").click(function(){
	    // For link
	    $(this).addClass('active');
	    $(this).parent().addClass('active');
	    $(this).parent().siblings().find('a').removeClass("active");
	    $(this).parent().siblings().removeClass("active");

	   	// For div
	    var hash = this.hash;
	    $(hash).addClass('active');
	    $(hash).siblings().removeClass("active");
	});
});

