
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ 
	dustbinimage=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	dustbinsprite = createSprite(700,300)
	dustbinsprite.addImage(dustbinimage)
	dustbinsprite.scale = 0.5
	paperbody = new Paper2(100,100,50)
	groundbody = new Ground(500,390,1000,20)
	dustbinleftbody = new Dustbin(650,330,10,100)

	dustbinrightbody = new Dustbin(750,330,10,100)
	
	dustbinbottombody = new Dustbin (700,375,100,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperbody.display();
  groundbody.display();
  dustbinleftbody.display();
  dustbinrightbody.display();
  dustbinbottombody.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paperbody.body, paperbody.body.position, {x:40, y:-35});  		

}



