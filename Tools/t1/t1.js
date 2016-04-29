var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

var FPS = 30;



setInterval(function(){
	update();
	draw();
},1000/FPS);

function update() {
	if (keydown.left) {
		player.x -= 2;
	}
	
	if (keydown.right) {
		player.x += 2;
	}
}

function draw() {
	canvas.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	player.draw();
}

var player = {
	color: "#00A",
	x: 220,
	y: 270,
	width: 32,
	height: 32,
	draw: function() {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x,this.y,this.width,this.height);
	}
};


$(function() {
  window.keydown = {};
  
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] || String.fromCharCode(event.which).toLowerCase();
  }
  
  $(document).bind("keydown", function(event) {
    keydown[keyName(event)] = true;
  });
  
  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });
});















