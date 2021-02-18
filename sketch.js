
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	trash1= new Trash(405,499,40,60)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  text(mouseX+","+mouseY,10,45)




  groundObject.display();
  dustbinObj.display();
trash1.display();
}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(trash1.body,trash1.body.position,{x:150,y:-170}); } }

