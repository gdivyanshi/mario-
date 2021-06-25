 var mario_running,mario_dead , background_image,coinImg ,obstacle1Img,obstacle2Img;
var  obstacle3Img ;  
  var mario;



function preload(){
  mario_running = loadAnimation("capture1.png","capture3.png","capture4.png")
  mario_dead = loadImage("mariodead.png")
  background_image = loadImage("backg.jpg")
  coinImg = loadImage("coin.png")
  obstacle1Img = loadImage("obstacle1.png")
  obstacle2Img = loadImage("obstacle2.png")
  obstacle3Img = loadImage("obstacle3.png")
}

function setup(){
  createCanvas(800,500);
  
  ground = createSprite(0,220,800,50)
  ground.addImage(background_image)
  ground.x=ground.width/2
  ground.velocityX=-4
  mario = createSprite(50,350,10,60)
  mario.addAnimation("running",mario_running)
  coinGroup=new Group()
  obstaclesGroup = new Group()
}
function draw(){
  background("blue")
  drawSprites();
  if(keyDown ( "space")){
    mario.velocityY=-3
    
  }
  mario.velocityY=+1
    
    if(ground.x<0){
      ground.x=ground.width/2
    }
    mario.collide(ground)
 spawnCoin()
 spawnObstacles()
  
}


function spawnCoin(){
  if(frameCount % 70 === 0){
    var coin = createSprite(450,150,30,30)
    coin.y =Math.round(random(50,150))
    coin.addImage(coinImg)
    coin.scale=0.2
    coin.velocityX = -4
    coinGroup.add(coin)
  }
 
}
function spawnObstacles(){
  if(frameCount % 70 === 0){
    var obstacles = createSprite(450,400,50,50)
    var rand =Math.round(random(1,3))
    switch (rand){
   
    
      case 1:
   obstacles.addImage( obstacle1Img);
    break;
    case 2:
   obstacles.addImage( obstacle2Img);
   
    break;
    case 3:
   obstacles.addImage( obstacle3Img);
    break;
    }
    obstacles.scale=0.4
    obstacles.velocityX =-3
    obstaclesGroup.add(obstacles)
  }
}