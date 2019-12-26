var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 drawSprites();
}
function bounceOff(ob1,ob2){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}


/*var frect,mrect;
var gob1,gob2,gob3,gob4;

function setup() {
  createCanvas(1200,800);
  frect=createSprite(200, 200, 50, 80);
  mrect=createSprite(400,200,80,30);
  mrect.shapeColor="orange";
  frect.shapeColor="orange";
gob1=createSprite(200,100,50,50);
gob1.shapeColor="yellow";

gob2=createSprite(300,100,50,50);
gob2.shapeColor="yellow";

gob3=createSprite(400,100,50,50);
gob3.shapeColor="yellow";

gob4=createSprite(500,100,50,50);
gob4.shapeColor="yellow";

}

function draw() {
 background(0,0,0);  


  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

if(isTouching(mrect,gob4)){
  mrect.shapeColor="red";
  gob4.shapeColor="red";
}
else{
  mrect.shapeColor="orange";
  gob4.shapeColor="orange";
}


 drawSprites();
}

function isTouching(ob1,ob2){
  if(ob1.x-ob2.x<ob2.width/2+ob1.width/2
    && ob2.x-ob1.x<ob2.width/2+ob1.width/2
    && ob1.y-ob2.y<ob2.height/2+ob1.height/2
    && ob2.y-ob1.y<ob2.height/2+ob1.height/2){
   return true;
    }
   else{
     return false;
   }
}*/