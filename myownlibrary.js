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
  }