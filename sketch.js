function setup() {
  createCanvas(400,400);
  background("black");
}
  
  function draw() {  
  stroke("blue")
  fill("gold")
  
  if(mouseIsPressed)
  rect(mouseX, mouseY, 20, 20);
}
