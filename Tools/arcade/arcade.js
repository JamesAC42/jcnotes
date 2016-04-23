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




