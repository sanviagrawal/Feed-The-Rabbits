var garden,rabbit;
var gardenImg,rabbitImg;
var leaves,leavesImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leavesImg=loadImage("orangeLeaf.png");
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
  spawnleaves();
  if(frameCount%80===0){
    spawnleaves();
  }


  drawSprites();
}
function spawnleaves(){
  leaves=createSprite(random(50,350,),40,10,10);
  leaves.scale=0.02
  leaves.addImage(leavesImg);
  leaves.velocityY=+4
  


}