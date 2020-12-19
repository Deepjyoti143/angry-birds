var myengine,myworld,ground,box1,box2,box3,box4,box5,pig1,pig2,
    log1,log2,log3,log4,bird;

    function preload(){
     // bg=loadImage("bg1.png");
     // log1=loadImage("sling1.png");
     // log2=loadImage("sling2.png");
     // log3=loadImage("sling3.png");
      

    }
function setup() {
  createCanvas(1200,600);
 myengine=Matter.Engine.create();
 myworld=myengine.world;
 ground=new Ground(600,590,1200,30)
 box1=new Box(900,500,50,50);
 box2=new Box(1100,500,50,50);
 pig1=new Pig(1000,500);
 log1=new Log(1000,450,250,PI);
 box3=new Box(900,400,50,50);
 box4=new Box(1100,400,50,50);
 pig2=new Pig(1000,400);
 log2=new Log(1000,350,250,PI);
 box5=new Box(1000,300,50,50);
 log3=new Log(950,300,150,PI/4);
 log4=new Log(1050,300,150,PI/-5/4);
 bird=new Bird(100,100);
}

function draw() {
  background(bg); 
  Matter.Engine.update(myengine);
  rectMode( CENTER)
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  ground.display();
}