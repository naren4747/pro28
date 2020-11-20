
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gamestate="onsling"

function preload()
{
	tree=loadImage("tree.png")
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1200,20)
	mango1= new Mango(940,210,50)
	mango2=new Mango(915,290,30)
  mango3=new Mango(845,320,60)
  mango4 = new Mango(970,245,50)
  mango5 = new Mango(1160,365,50)
  mango6 = new Mango(1020,250,50)
  mango7 = new Mango(900,355,50)
  mango8 = new Mango(1050,355,50)
  mango9 = new Mango(1065,355,50)
  mango10 = new Mango(1000,360,50)
  stone = new Stone(170,530,50) 
  sling = new SlingShot(stone.body,{x:170,y:530})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  text("x:"+mouseX,100,100)
    text("y:"+mouseY,100,130)
  imageMode(CENTER)
  image(boy,230,600,200,300)
  image(tree,1000,420,430,530)
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  stone.display()
  sling.display()
  colided(stone,mango1)
  colided(stone,mango2)
  colided(stone,mango3)
  colided(stone,mango4)
  colided(stone,mango5)
  colided(stone,mango6)
  colided(stone,mango7)
  colided(stone,mango8)
  colided(stone,mango9)
  colided(stone,mango10)

}

function mouseDragged(){
  gamestate="onsling"
  if (gamestate==="onsling"){
     Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
 
}
function mouseReleased(){
  sling.fly()
  gamestate="launched"
}
function keyPressed(){
  if(keyCode === 32&&stone.body.speed<1){
     sling.attach(stone.body);
     
     var gamestate = "onSling";
     Matter.Body.setPosition(ston.body,{x:200, y:100})
  }
}
function colided(lstone,lmango){
var distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y)
if(distance<=lstone.r+lmango.r){
  Matter.Body.setStatic(lmango.body,false)
}
}

