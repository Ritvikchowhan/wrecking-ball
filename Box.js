class Box {
  constructor(x,y){
    var option={
    'restitution':0.8,
    'friction':1.0,
    'density':1.0}
    this.body=Bodies.rectangle(x,y,100,100,option);
    World.add(world,this.body)
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    fill("red");
    rect(0,0,100,100);
    
    pop();
  }

}