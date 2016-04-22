function SpriteSheet(path, frameWidth, frameHeight, frameSpeed, endFrame){
	var image = new Image();
	var framesPerRow;
	
	//calculate the number of frames in a row after the image loads
	var self = this;
	image.onload = function(){
		framesPerRow = Math.floor(image.width / frameWidth);
	};
	image.src = path;
	
	var currentFrame = 0;
	var counter = 0;
	
	this.update = function(){
		if(counter == (frameSpeed - 1())
			currentFrame = (currentFrame + 1) % endFrame;
		counter = (counter + 1) % frameSpeed;
	}
	
	this.draw = function(x,y){
		var row = Math.floor(currentFrame / framesPerRow);
		var col = Math.floor(currentFrame % framesPerRow);
		ctx.drawImage(
		image,
		col * frameWidth, row * frameHeight,
		frameWidth, frameHeight,
		x, y,
		frameWidth, frameHeight);
	}
}

spritesheet = new SpriteSheet('standingsprite.png',125,121,3,5);
function animate(){
	requestAnimFrame(animate);
	ctx.clearRect(0,0,150,150);
	spritesheet.update();
	spritesheet.draw(12.5,12.5);
}






