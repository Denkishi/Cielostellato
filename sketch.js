

/*
 * Node Garden application section
 * Set the nodes on the grid.
 */

const w = 720;
const h = 720;
const nodeNum = 0.5;
const nodes = new Array();

function setup() {
loop();

}


function draw(){
  
  
  	createCanvas(w, h);

	// set the nodes on the grid
	const step = min(w, h) * 0.01;
	for (let i = 0; i < nodeNum; i++) {
		nodes.push(createVector(
			floor(random(w / step)) * step,
			floor(random(h / step)) * step
		));
	}
  
  
  
  
	// draw node-garden
	background(0);
	push();
	translate(step * 0.5, step * 0.5);
	fill(240);
	stroke(240);
	strokeWeight(step * 0.01);
	for (let n of nodes) {
		for (let m of nodes) {
			let d = dist(n.x, n.y, m.x, m.y);
			if (d > step * 1.3 && d < step * 2.1) {
				line(n.x, n.y, m.x, m.y);
			}
		}
		circle(n.x, n.y, step * 0.1);
	}
	pop();
}
