class Box{
    constructor(x,y,width,height){
         this.body=Matter.Bodies.rectangle(x,y,width,height);
         this.w=width;
         this.h=height;
         Matter.World.add(myworld,this.body);
         //this.image=loadImage("wood1.png")
    }


display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    imageMode(CENTER)
    translate(pos.x,pos.y);
    rotate(angle);
    image(this.image,0,0,this.w,this.h);
    pop();
    
}
  
}
