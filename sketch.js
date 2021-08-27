var fixedRect, moveRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  moveRect = createSprite(400, 200, 80, 30);
  moveRect.shapeColor = "green";
  moveRect.debug = true;

}

function draw() {
  background(255,255,255);  
  moveRect.x = mouseX;
  moveRect.y = mouseY;
  console.log(moveRect.x - fixedRect.x);
  if(moveRect.x - fixedRect.x <= (fixedRect.width/2 + moveRect.width/2 ) &&
  fixedRect.x - moveRect.x <= (fixedRect.width/2 + moveRect.width/2 )   )
  {
  moveRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }

  else{
  moveRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  }
 //vertical movement

 if(moveRect.y - fixedRect.y <= (fixedRect.height/2 + moveRect.height/2 ) &&
 fixedRect.y - moveRect.y <= (fixedRect.height/2 + moveRect.height/2 )   )
 {
 moveRect.shapeColor = "red";
 fixedRect.shapeColor = "red";

 }

 else{
 moveRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 }


  
  drawSprites();
}