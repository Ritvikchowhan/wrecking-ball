const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3;







function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ball   = Bodies.circle(400,100,50);
    World.add(world,ball);
    options={
        bodyA:ball,
        pointB:{x:400,y:50},
        length:250
    }
    rope   = Constraint.create(options);
    World.add(world,rope);
    box1   = new Box(600,400);
    box2   = new Box(700,400);
    box3   = new Box(800,400);

    box4  = new Box(600,300);
    box5   = new Box(700,300);
    box6  = new Box(800,300);

    box7   = new Box(600,200);
    box8   = new Box(700,200);
    box9   = new Box(800,200);

    box10   = new Box(600,100);
    box11   = new Box(700,100);
    box12   = new Box(800,100);

    box13   = new Box(600,0);
    box14   = new Box(700,0);
    box15   = new Box(800,0);

}

function draw(){

    background("white");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ellipseMode(RADIUS);
    fill("black");
    ellipse(ball.position.x,ball.position.y,50,50);

    line(ball.position.x,ball.position.y,400,50);




}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
