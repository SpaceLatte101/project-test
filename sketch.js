var groundImg, ground, invisibleGround;
var bunnyIdle, bunny, bunny_run;

var START = 1;
var PLAY = 0;;
var END = 0;

var gameState = START;

var obstacleGroup, snake, hyena, scorpian;


function preload(){

groundImg = loadImage("ground2.png");
bunnyIdle = loadAnimation("bunnyIdle1.png","bunnyIdle2.png","bunnyIdle3.png","bunnyIdle4.png");
bunny_run = loadAnimation("bunnyRun1.png","bunnyRun2.png","bunnyRun5.png","bunnyRun6.png");

snake = loadAnimation("snake1.png","snake2.png","snake3.png","snake4.png");
hyena = loadAnimation("hyena1.png","hyena2.png","hyena3.png","hyena4.png","hyena5.png","hyena6.png");
scorpian = loadAnimation("scropian1.png","scorpian2.png","scorpian3.png","scorpian4.png");

}

function setup() {
 createCanvas(600,600);
 ground = createSprite(300,300);
 ground.addImage("ground",groundImg);
 ground.x = width/2
 

 bunny = createSprite(70,270);
 bunny.addAnimation("idle",bunnyIdle);
 bunny.addAnimation("running",bunny_run);
 bunny.scale = 2;
 
 invisibleGround = createSprite(70,308,100,10);  
 invisibleGround.shapeColor = "white";
 invisibleGround.visible =false;

}

function draw() {
background("white");

if (ground.x < 0){
    ground.x= ground.width/2;
  }

  if(keyWentDown("a")){
      gameState = PLAY;
  }

  if(gameState===PLAY){
    bunny.changeAnimation("running", bunny_run);
    ground.velocityX = -3;
    spawnObstacle();
  }
  if(touches.length > 0 || keyDown("space")){
  bunny.velocityY = -10;
  }

  bunny.velocityY = bunny.velocityY + 0.8;

  bunny.collide(invisibleGround);

 drawSprites();
}

function spawnObstacle() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(width-20,267,20,30);
      obstacle.setCollider('circle',0,0,45)
      obstacle.velocityX = -3;

      var rand = Math.round(random(1,2,3));
    switch(rand) {
      case 1: obstacle.addAnimation(snake);
              break;
      case 2: obstacle.addAnimation(hyena);
              break;
      case 3: obstacle.addAnimation(scorpian);
              break;
      default: break;
    }
    }}