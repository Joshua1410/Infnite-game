//Doge the car

var boundary1, boundary2, boundary3, boundary4;
var player;
var obstacle;
var Meteorite, Rocket, SolarSystem, Star;
var MeteoriteImg, RocketImg, SolarSystemImg, StarImg;

function preload(){
    MeteoriteImg = loadImage("Meteorite.png");
    RocketImg = loadImage("Rocket.png");
    SolarSystemImg = loadImage("SolarSystem.png");
    StarImg = loadImage("Star.png");
}

function setup() {

    createCanvas(600,600);

    SolarSystem = createSprite(200,180,400,20);
    SolarSystem.addImage("SolarSystem.png",SolarSystemImg);
    SolarSystem.x = SolarSystem.width/2;

    boundary1 = createSprite(200,100,1000,0.1);
    boundary2 = createSprite(200,250,1000,0.1);
    boundary3 = createSprite(0,175,0.1,155);
    boundary4 = createSprite(400,175,0.1,155);
    
    player = createSprite(25,175,25,25);

    boundary1.shapeColor = ("black");
    boundary2.shapeColor = ("black");
    boundary3.shapeColor = ("black");
    boundary4.shapeColor = ("black");
    player.shapeColor = ("Purple");

    SolarSystem.velocityX = -2;

    boundary1.visible = ("false");
    boundary2.visible = ("false");
    boundary3.visible = ("false");
    boundary4.visible = ("false");

    player.addImage("Rocket.png",RocketImg);
    
    //obstaclesGroup.add(obstacles);
    obstacleGroup = createGroup();
}


    /*obstacle1.bounceOff(boundary1);
    obstacle1.bounceOff(boundary2);
    obstacle2.bounceOff(boundary1);
    obstacle2.bounceOff(boundary2);
    obstacle3.bounceOff(boundary1);
    obstacle3.bounceOff(boundary2);
    obstacle4.bounceOff(boundary1);
    obstacle4.bounceOff(boundary2);*/

function draw() {
   
    
  background("0");

   // createEdgeSprites();
   createEdgeSprites();
    
   if (SolarSystem.x < 0){
    SolarSystem.x = SolarSystem.width/2;
    }
    
    if (keyDown(UP_ARROW)) {
        player.y=player.y-4;
      }
      
      if (keyDown(DOWN_ARROW)){
        player.y=player.y+4;
      } 

    /*var a = Math.round(random(1,6));
    switch (a){
      case 1 : obstacle1.addImage(MeteoritseImg);
      break;
      case 2 : obstacle2.addImage(StarImg);;
      break;
      default : break;
    }  */

    if (player.isTouching(obstacleGroup)){
      textSize(100);
      text("Game Over, Loser!", 400, 400);
    }
  
    spawnObstacles();
 
    drawSprites();

    
}


function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,100,10,40);
    obstacle.y = Math.round(random(40,400));
    obstacle.velocityX = -6 ;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
      case 1 : obstacle.addImage(MeteoriteImg);
      break;
      case 2 : obstacle.addImage(StarImg);;
      break;
      default : break;
     }
     obstacleGroup.add(obstacle);
    }
  } 