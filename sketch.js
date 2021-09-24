var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleImg
var leaves, leafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage('apple.png');
  leafImg = loadImage('leaf.png');
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;
  
  var select_sprites = Math.round(random(1,2));
  
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createLeaves();
    }
    else{
      createApples();
    }
  }

 
  drawSprites();
}

function createApples(){
if (frameCount % 80 === 0) {
    apples = createSprite(random(0,400),100,10,10);
    apples.addImage(appleImg);
    apples.velocityY = 3;
    apples.scale = 0.1
    apples.lifetime = 100;
 } 
}

function createLeaves(){
 if (frameCount % 80 === 0) {
      leaves = createSprite(random(50,370),50,10,10);
      leaves.addImage(leafImg);
      leaves.velocityY = 2;
      leaves.scale = 0.1
      leaves.lifetime = 100;
   } 
  }