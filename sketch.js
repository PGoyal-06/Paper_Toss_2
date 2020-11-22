
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

dustbin = new Dustbin(600,650,200,10);
dustbin2 = new Dustbin(500,600,10,100);
dustbin3 = new Dustbin(700,600,10,100);
paper = new Paper(150,650,70);
ground = new Ground(400,690,800,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}



