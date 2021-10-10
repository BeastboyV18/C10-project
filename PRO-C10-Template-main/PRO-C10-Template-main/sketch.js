var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 
  shipImg = loadAnimation("10.png","9.png","8.png","7.png","6.png","5.png","4.png","3.png","2.png","1.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png")
   
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(610,400);
  background("white");

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  ship = createSprite(130,200,100,100);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background("white");
  sea.velocityX = -3

  
  if(sea.x < 0){
    sea.x = sea.width/8;
    
  }

 
  drawSprites();
}