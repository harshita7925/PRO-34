
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	pendulum1 = new Pendulum(250,450,"red");
	pendulum2 = new Pendulum(300,450,"blue");
	pendulum3 = new Pendulum(350,450,"violet");
	pendulum4 = new Pendulum(400,450,"pink");
	pendulum5 = new Pendulum(450,450,"white");

	sling1 = new Sling(pendulum1.body,this.pointB);
	sling2 = new Sling(pendulum1.body,this.pointB);
	sling3 = new Sling(pendulum1.body,this.pointB);
	sling4 = new Sling(pendulum1.body,this.pointB);
	sling5 = new Sling(pendulum1.body,this.pointB);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}



