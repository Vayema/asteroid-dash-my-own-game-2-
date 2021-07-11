var backgroundImage, background, bg;
var rocket, asteroid, asteriodImg;
var rocketimg;
var instructions;

function preload(){
  rocketimg = loadImage("Images/rocket.png")
  asteroidImg = loadImage("Images/asteroid.png")
  instructions = loadImage("Images/instructionss.jpg")
  backgroundImage = loadImage("Images/spacebg.png")
}

function setup() {
  createCanvas(800, 300);

  edges = createEdgeSprites();

  bg = createSprite(800,100,800,300);
  bg.addImage(backgroundImage);
  bg.x = bg.width/2;
  bg.velocityX = -1;

  rocket = createSprite(150,150,20,20);
  rocket.addImage("rocketship", rocketimg);
  rocket.scale = 0.3
  rocket.rotation = rocket.rotation + 20

}

function draw(){
  background("black");

  if (bg.x < 300){
    bg.x=bg.width/2;
  }

  //Go up
  if(keyDown(UP_ARROW)) {
    rocket.velocityY = -1;
  }
  
   //Go left
   if(keyDown(LEFT_ARROW)) {
    rocket.velocityX = -1;
  }

   //Go right
   if(keyDown(RIGHT_ARROW)) {
    rocket.velocityX = 1;
  }

   //Go down
   if(keyDown(DOWN_ARROW)) {
    rocket.velocityY = 1;
  }

  spawnAsteroid();

  drawSprites();
}

function spawnAsteroid(){
 if (frameCount%180===0){
   asteroid = createSprite(800,100,10,10);
   asteroid.addImage("asteroid",asteroidImg);
   asteroid.velocityX = -1
   asteroid.velocityY = 1
   asteroid.scale = 0.2
  
   asteroid.bounceOff(bottomEdge);
   //asteroid.bounceOff(bottomEdge);
 
   asteroid.y = Math.round(random(10,290));
  }
}