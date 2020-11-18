var bullet,wall,speed,weight,thickness,damage;

function setup() {
 createCanvas(1000,600);

 speed=random(220,320);
 weight=random(30,50);
thickness=random(20,80);

 bullet= createSprite(50, 300, 30, 10);
 bullet.velocityX=speed;
 bullet.shapeColor = color(0,0,0);

 wall = createSprite( 900, 300, thickness, 500 );
 wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);   
  if (hasCollided (bullet,wall))
  { 
    bullet.velocityX = 0;

    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
console.log(damage);

      if(damage>10)
      { 
        wall.shapeColor = color(255,0,0);
       } 
       if(damage<10)
       {
          wall.shapeColor = color(0,255,0);
         }
         }

      
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
   else{
    return false;
  }
 
}

