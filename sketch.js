
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobobject1,bobobject2
var bobobject3,bobobject4
var bobobject5
                                                                                       






function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bobobject1=createSprite(330,380,20,20);
bobobject2=createSprite(360,380,20,20);
bobobject3=createSprite(390,380,20,20);
bobobject4=createSprite(420,380,20,20);
bobobject5=createSprite(450,380,20,20);

	engine = Engine.create();
	world = engine.world
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);





  drawSprites();
 
}



