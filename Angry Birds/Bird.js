class Bird extends Box{
    constructor(x,y){
        
        super(x,y,40,40);
       // this.image=loadImage("bird.png");
    }
    display(){
       var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        
        super.display();
    }
}

         