var capture;
var W, H;
var pd =17; 
var w;
var h;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    capture = createCapture(VIDEO); 
    capture.size(640, 480);
    capture.hide();
    W = 640;
    H = 480;
	w = windowWidth/640;
	h = windowHeight/480;
}

function draw() {
    var x, y;
    capture.loadPixels();
    for (y = 0; y < H; y+=pd) {
        for (x = 0; x < W; x+=pd) {
            var idx = 4 * (y * W + x);
			push();
			translate(windowWidth-x*w-pd*w, y*h);
			//rotate(radians(capture.pixels[idx]));
			noStroke();
            fill(capture.pixels[idx],capture.pixels[idx+2],capture.pixels[idx+2],capture.pixels[idx+5]);
            rect(0,0,pd*w+10,pd*h+10);
			pop();
        }
    }

	

}
