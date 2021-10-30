var PLAY=1
var END=0
var gamestate=PLAY

var bg, bgImg,cloud2Img,airplaneImg,birdImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/background.png")
cloud2Img = loadImage("assets/cloud2.png")
airplaneImg = loadImage("assets/airplane.png")
birdImg = loadImage("assets/obsTop2.png")

//balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

  createCanvas(1500,600);
//background image
//bg = createSprite();
//bg.addImage(bgImg);
//bg.scale = 4

//creating top and bottom grounds

bottomGround = createSprite(100,590,2900,20);
bottomGround.visible = true;
bottomGround.shapeColor="blue"

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addImage(airplaneImg)
//ballon.addAnimation("balloon",balloonImg);
balloon.scale = 0.3;

cloudgroup = new Group()
birdgroup = new Group()




}

function draw() {
  
  background("");
  if (gamestate===PLAY){

    if(keyDown("RIGHT_ARROW")) {
      balloon.x+=5 ;
      
    }
    if(keyDown("LEFT_ARROW")) {
      balloon.x-=5 ;
      
    }

    if(keyDown("UP_ARROW")) {
      balloon.y-=5 ;
      
    }

    if(keyDown("DOWN_ARROW")) {
      balloon.y+=5 ;
      
    }
    spawnclouds()
    spawnbirds()

    if(cloudgroup.isTouching(balloon)||(birdgroup.isTouching(balloon))){
      gamestate = END
    }
     
    //cloudgroup.setVelocityXEach(0);

    
    
    }
    if(gamestate===END){

      text("GAMEOVER!",200,150,)
      
      

    }
          
   
        drawSprites();
        
}
function spawnclouds(){
  if (frameCount % 60 === 0) {
    cloud = createSprite(1300,100,40,10);
   cloud.y = Math.round(random(50,300));
   cloud.addImage(cloud2Img);
   cloud.scale = 0.5;
   cloud.velocityX = -10;
   
    //assign lifetime to the variable
   cloud.lifetime = 234;
   
   //adjust the depth
   cloud.depth = balloon.depth;
  balloon.depth = balloon.depth + 1;
   

   //adding cloud to the group
  cloudgroup.add(cloud);
   }
}
function spawnbirds(){
  if (frameCount % 60 === 0) {
    cloud1 = createSprite(1500,100,40,10);
   cloud1.y = Math.round(random(30,300));
   cloud1.addImage(birdImg);
   cloud1.scale = 0.2;
   cloud1.velocityX = -10;
   
    //assign lifetime to the variable
   cloud1.lifetime = 234;
   
   //adjust the depth
   cloud1.depth = balloon.depth;
   balloon.depth = balloon.depth + 1;
   
   //adding cloud to the group
  birdgroup.add(cloud1);
  }
}