
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,ball;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1350,620);
	ball=new Paper(800,600,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine)

  groundObject.display();
  dustbinObj.display();
  ball.display();

  drawSprites();
}

