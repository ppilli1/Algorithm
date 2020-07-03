var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  fixedRect = createSprite(400,200,100,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.width/2 && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
    movingRect.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
    fixedRect.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}