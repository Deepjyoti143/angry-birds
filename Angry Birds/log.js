class Log{
    constructor(x,y,width,angle){
         this.body=Matter.Bodies.rectangle(x,y,width,15);
         this.w=width;
         this.h=15;
         Matter.Body.setAngle(this.body,angle);
         Matter.World.add(myworld,this.body);
    }


display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rect(0,0,this.w,this.h);
    pop();
    
}
  
}
