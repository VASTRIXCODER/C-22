const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;


var world,engine;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var option={
    isStatic:true
  }
var border = {
  restitution:0.8
}
  ground=Bodies.rectangle(150,380,350,20,option);
  ball = Bodies.circle(200, 200, 15, border);
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground.position.x)
  console.log(ground.position.y)
 
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,350,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15);
  drawSprites();
}