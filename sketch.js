var car;
var wall;
var speed;
var witdh;

function setup() {
  createCanvas(1600,400);

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=colour(80,80,80);

  speed=random(55,90);
  witdh=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

}

function draw() {
  background(0);  
  
  if(wall.x - car.x < (wall.witdh + car.witdh) /2 ){
    car.velocityX=0
    var deformation = 0.5 * witdh * speed * speed / 22509
    if(deformation > 180){
       car.shapeColor=colour(255,0,0);
    }
    if(deformation < 180 && deformation > 80){
       car.shapeColor=colour(230,230,0);
    }
    if(deformation < 80){
       car.shapeColor=colour(0,255,0);
   }
 }
 
  drawSprites();
}