var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

  Engine.run(engine);
 
}

function draw() {
 // background(255,255,255);
 background("black") 
 
 ground.display();

  drawSprites();
}