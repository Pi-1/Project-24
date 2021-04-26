var paper, ground;
var bin1, bin2, bin3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,height,1200,20);

	paper = new Paper(100,650,75);

	bin1 = new Dustbin2(600,615,20,100);
	bin2 = new Dustbin1(675,660,175,20);
	bin3 = new Dustbin2(750,615,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:135,y:-145});
	}
}

