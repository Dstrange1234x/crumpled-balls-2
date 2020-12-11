
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbinImg;

function preload()
{
	dustbinImg=loadImage("pics/dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);

	box1=createSprite(width/1.3,height-20,225,20);
	box1.shapeColor=color("red");
	box1.addImage("box",dustbinImg);



	
	
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,100,30);
	ground=new Ground(500,height,1000,20);
	

	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  Engine.update(engine);
  
  paper.display();
  ground.display();


  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

