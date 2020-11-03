var car,wall,speed,weight;

function setup() {
 createCanvas(1000,600);

 speed=random(50,90);
 weight=random(400,1500);


 car = createSprite(50, 300, 50, 50);
 car.velocityX=speed;
 car.shapeColour = color(255);

 wall = createSprite(900, 300, 40, 500);
 wall.shapeColour = color(255);
}

function draw() {
  background(255,255,255);  

  if (wall.x - car.x < (car.width+wall.width)/2){ 
    car.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22500;

     if (deformation>180)
      { 
        car.shapeColor = color(255,0,0);
     }

      if (deformation>100 && deformation<180)
       { car.shapeColor = color(230,230,0); 
    }

     if (deformation<100)
     {
        car.shapeColor = color(0,255,0);
     } 

    }

  drawSprites();
}