
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var engine
var world
var groundObj
var wall1
var wall2


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.

var ball_options={

isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}


  ball = Bodies.circle(850, 300, 10, ball_options);
  World.add(world, ball);

  groundObj = new ground(width/2, 670, width, 20);
  wall1 = new ground(1100,600,20,120);
  wall2 = new ground(1200,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.display();
  wall1.display();
  wall2.display();

  rect.display(this.body.position.x, this.body.position.y, this.width, this.height);

  ellipse(ball.position.x, ball.position.y, 10);
 
}


function keyPressed(){

    if(keyCode === UP_ARROW){

     Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-10})

	}

}
