function setup() {
  createCanvas(800, 800);
   background("black");
}

function draw() {
  
  stroke("white");
  fill("blue");
  
  if(mouseIsPressed){
   rect(mouseX,mouseY,30,30);
  }
} 
    
    
     