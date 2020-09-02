var fixedRect1, movingRect;
var fixedRect2,fixedRect3,fixedRect4;

function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(100, 100, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRec1t.debug = true;
  fixedRect2 = createSprite(200, 100, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect 3= createSprite(300, 100, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  fixedRect4 = createSprite(400, 100, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(fixedRect1,movingRect)){
    movingRect.shapeColor = "red";
  fixedRect1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect1.shapeColor = "green";
  }
  
  drawSprites();
}

function isTouching(object1,object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
  return true;
}
else {
  return false;
}
}