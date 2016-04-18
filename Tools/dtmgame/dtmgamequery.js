$(document).ready(function(){
	$('.building').mousedown(function(){
		$(this).css('border-left', '10px solid #6699ff');
		$(this).css('border-bottom', '10px solid #6699ff');
		$(this).css('border-top', '5px solid #00004d');
		$(this).css('border-right', '5px solid #00004d');
		$(this).css('background','linear-gradient(to right, #007acc , #002e4d)');
	}).mouseup(function(){
		$(this).css('border-left', '10px solid #00004d');
		$(this).css('border-bottom', '10px solid #00004d');
		$(this).css('border-top', '5px solid #6699ff');
		$(this).css('border-right', '5px solid #6699ff');
		$(this).css('background','linear-gradient(to right, #002e4d , #007acc)');
	}).mouseenter(function(){
		var name = $(this).attr('id');
		var desc_name = '#' + name + '-description';
		$(desc_name).slideDown('fast');
	}).mouseleave(function(){
		var name = $(this).attr('id');
		var desc_name = "#" + name + '-description';
		$(desc_name).slideUp('fast');
	});
	
	$('#click-button').mousedown(function(){
		$(this).css('margin-top','35px');
	}).mouseup(function(){
		$(this).css('margin-top','25px');
	});
	
	
});

$(document).ready(function(){
	
	$('#upgrade-button').mouseenter(function(){
		$(this).css('background','linear-gradient(#cccc00,#999900');
	}).mouseleave(function(){
		$(this).css('background','linear-gradient(#e6e600,#b3b300)');
	}).mousedown(function(){
		$(this).css('margin-top','20px');
	}).mouseup(function(){
		$(this).css('margin-top','10px');
	});
});


$(document).ready(function(){
	$('.building').fadeTo(100,0.25);
	$('.description').slideUp('fast');
	$('#upgrade-button').slideUp('fast');
});

