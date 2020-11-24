
//Step 1
const Engine = Matter.Engine; // To create the physics engine  > Universe
const World = Matter.World; // Used to create the physical world > Planets: Earth, Mars
const Bodies = Matter.Bodies; // Used to create the physcal objects which inhibit the world > Humans, Trees, animals etc

//Step 2
var myEngine, myWorld;

var object;
var ball;
var square;

function setup() {
  createCanvas(400, 400);

  //Step 3
  myEngine = Engine.create();  // world
  myWorld = myEngine.world;


  //intermediate imp step
  var options = {
    isStatic: true
  }

  //Step 4
  object = Bodies.rectangle(200, 380, 400, 20, options);
  ball = Bodies.circle(200, 10, 20, { restitution: 0.8 });
  square = Bodies.rectangle(300, 10, 100, 50, { angle: 70 });
  //Step 5
  World.add(myWorld, object)
  World.add(myWorld, ball);
  World.add(myWorld, square);
  console.log(square)

}

function draw() {
  background("lightblue");
  //Step 6
  Engine.update(myEngine)

  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)

  rotate(square.angle);
  rect(square.position.x, square.position.y, 100, 50);
}