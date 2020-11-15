
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constaint = Matter.Constaint;
var ball1,ball2,ball3,ball4,ball5;
var ground
var chain1,chain2,chain3,chain4,chain5

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1=new Ball(180,200);
	ball2=new Ball(195,200);
	ball3=new Ball(210,200);
	ball4=new Ball(225,200);
	ball5=new Ball(240,200);
	ground=new Ground(400,300,800,10);
	chain1=new Chain(ball1.body,ground.body,120,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
  
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:150,y:300})
	}
  }
  
  
  



