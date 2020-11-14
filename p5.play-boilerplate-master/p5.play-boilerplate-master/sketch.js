const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;
var  slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
polygon=new Polygon(250,190,1,1);
   
   
  
//layer1
    box1 = new Box1(630,530,1,1);
    box2 = new Box1(660,530,1,1);
    box3 = new Box1(690,530,1,1);
    box4 = new Box1(720,530,1,1);
    box5 = new Box1(750,530,1,1);
    box6 = new Box1(780,530,1,1);
    box7 = new Box1(810,530,1,1);
//layer2
    box8 = new Box2(660,500,30,30,"red");
    box9 = new Box2(690,500,30,30,"red");
    box10 = new Box2(720,500,30,30,"red");
    box11 = new Box2(750,500,30,30,"red");
    box12 = new Box2(780,500,30,30,"red");
    //layer3
    box13 = new Box3(690,470,30,30,"green");
    box14 = new Box3(720,470,30,30,"green");
    box15 = new Box3(750,470,30,30,"green");
//layer4
box16 = new Box4(720,440,30,30,"orange");
    ground1=new Ground(730,540,340,10);
    ground2=new Ground(1000,300,200,10);
    //layer1
    box17 = new Box1(940,290,30,30,"red");
    box18 = new Box1(970,290,30,30,"red");
    box19 = new Box1(1000,290,30,30,"red");
    box20 = new Box1(1030,290,30,30,"red");
    box21 = new Box1(1060,290,30,30,"red");
   //layer2
   box22 = new Box2(970,260,30,30,"green");
   box23 = new Box2(1000,260,30,30,"green");
   box24 = new Box2(1030,260,30,30,"green");
   //layer3
   box25 = new Box3 (1000,230,30,30,"orange");


   
    slingshot = new SlingShot(polygon.body,{x:250, y:190});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    
    ground1.display();
    ground2.display();
    //layer1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
//layer2
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
  //layer3
  box13.display();
  box14.display();
  box15.display();
//layer4
box16.display();
//layer1
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
   //layer2
   box22.display();
   box23.display();
   box24.display();
   //layer3
   box25.display();
   polygon.addPic();
   
    slingshot.display();  
    detectcollision(polygon,box1); 
    detectcollision(polygon,box2); 
    detectcollision(polygon,box3); 
    detectcollision(polygon,box4); 
    detectcollision(polygon,box5); 
    detectcollision(polygon,box6); 
    detectcollision(polygon,box7); 
    detectcollision(polygon,box8);
    detectcollision(polygon,box9); 
    detectcollision(polygon,box10); 
    detectcollision(polygon,box11); 
    detectcollision(polygon,box12); 
    detectcollision(polygon,box13);
    detectcollision(polygon,box14); 
    detectcollision(polygon,box15); 
    detectcollision(polygon,box16);
    detectcollision(polygon,box17);
    detectcollision(polygon,box18); 
    detectcollision(polygon,box19); 
    detectcollision(polygon,box20); 
    detectcollision(polygon,box21); 
    detectcollision(polygon,box22);
    detectcollision(polygon,box23); 
    detectcollision(polygon,box24); 
    detectcollision(polygon,box25);
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    
    
    }

function mouseReleased(){
   slingshot.fly();
}

function detectcollision(lstone,lmango)
{
	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,	mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= (lmango.width+lstone.width)){
      lmango.collision();
    }
}

function keyPressed(){
    if(keyCode===32){
    
        slingshot.attach(polygon.body);
    }
    
    
    }