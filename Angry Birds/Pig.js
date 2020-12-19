class Pig{
    constructor(x,y){
         this.body=Matter.Bodies.rectangle(x,y,40,40);
         this.w=40;
         this.h=40;
         Matter.World.add(myworld,this.body);
         //this.image=loadImage("enemy.png");
    }


display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    imageMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    stroke("green");
    rect(this.image,0,0,this.w,this.h);
    pop();
    
  
}
}
