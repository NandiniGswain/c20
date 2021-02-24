var fixedR, movingR;




function setup() {
  createCanvas(1200,800);
 fixedR= createSprite(200, 200, 50, 80);
 fixedR.shapeColor="green";
 
movingR= createSprite(400, 200, 80, 30);
movingR.shapeColor="green";
}

function draw() {
  background("black");  
  
  movingR.x=World.mouseX;
  movingR.y=World.mouseY;
  console.log(movingR.x-fixedR.x);
  if((movingR.x-fixedR.x) <= (fixedR.width/2+movingR.width/2)&&(fixedR.x-movingR.x) <= (fixedR.width/2+movingR.width/2)&&
  (movingR.y-fixedR.y) <= (fixedR.height/2+movingR.height/2)&&(fixedR.y-movingR.y) <= (fixedR.height/2+movingR.height/2)
  ){
    movingR.shapeColor="red";
    fixedR.shapeColor="red";

  }
  
  else {
    
    movingR.shapeColor="green";
    fixedR.shapeColor="green";
  }
  
  
  
  
  
  drawSprites();
}