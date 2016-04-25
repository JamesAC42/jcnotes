$(document).ready(function(){
	var move = .945 * document.getElementById('hitbar').offsetWidth;
	function moveScroll(){
		$('#scroll').animate({
			marginLeft:"+="+move
		},400);
		move = -move;
	}
	setInterval(function(){
		moveScroll();
	},400);
});

var counter = 1;
setInterval(function(){
	$('#sprite').attr('src','images/frame' + counter.toString() + '.jpg');
	counter++;
	if(counter > 3)counter = 1;
},150)




