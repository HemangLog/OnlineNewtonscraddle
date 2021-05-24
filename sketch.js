//@hemangPresents

//Name of the effort = Online Newton's craddle

//Description
//It's a small creation for Science thinkers, lovers and enthusiasts, 
//that gives an opportunity and chance to view and perform the Newton's
//Craddle at online media.

//Objective
//To solve the questions and misunderstandings about Newton's craddle
//through live online motion of it. And, help them to know more about 
//physics.


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var HOME,ACTIVITY,observationState;
var backGround,backGroundImg
var holder;
var bob1,bob2,bob3,bob4,bob5;
var connector1,connector2,connector3,connector4,connector5;
var activityButton,activytButtonImg,stopButton,stopButtonImg,rearrangeButton,
    rearrangeButtonImg,homeButton,homeButtonImg;
var xOffset,yOffset;
var highlighterBox1,highlighterBox2;

function preload(){
	
   backGroundImg = loadImage("backGround.jpg");

   activityButtonImg = loadImage("activityButton.jpg");
   stopButtonImg = loadImage("stopButton.png");
   rearrangeButtonImg = loadImage("rearrangeButton.jpg");
   homeButtonImg = loadImage("homeButton.jpg");
}

function setup(){

	createCanvas(800,480);

	engine = Engine.create();
	world = engine.world;

    HOME = 1;
	ACTIVITY = 0;
    observationState = HOME;

	holder = new Holder();

    bob1 = new Bob();
	bob2 = new Bob();
	bob3 = new Bob();
	bob4 = new Bob();
	bob5 = new Bob();

    connector1 = new Rope(holder.body,bob1.body,3);
	connector2 = new Rope(holder.body,bob2.body);
	connector3 = new Rope(holder.body,bob3.body);
	connector4 = new Rope(holder.body,bob4.body);
	connector5 = new Rope(holder.body,bob5.body);

	
	activityButton = createSprite(405,420);
    activityButton.addImage(activityButtonImg);
	activityButton.scale = 0.12;

	stopButton = createSprite(75,240);
	stopButton.addImage(stopButtonImg);
	stopButton.scale = 0.07;
	
	rearrangeButton = createSprite(75,325);
    rearrangeButton.addImage(rearrangeButtonImg);
	rearrangeButton.scale = 0.1;

    homeButton = createSprite(75,410);
	homeButton.addImage(homeButtonImg);
	homeButton.scale = 0.12;

    xOffset = random(200,600);
    yOffset = random(420,465);

	
	highlighterBox1 = createSprite(100,48,160,80);
	highlighterBox1.shapeColor = 'yellow';

	highlighterBox2 = createSprite(130,53,230,60);
    highlighterBox2.shapeColor = 'yellow';
}


function draw(){

   background(backGroundImg);

   if(observationState === HOME){
	 
	activityButton.visible = true;
	highlighterBox1.visible = true;
	stopButton.visible = false;
	rearrangeButton.visible = false;
	homeButton.visible = false;
    highlighterBox2.visible = false;

    if(mousePressedOver(activityButton) || keyDown('enter')){

	   observationState = ACTIVITY;
	}
   }

   if(observationState === ACTIVITY){
	
	push();
	stroke('black');
	strokeWeight(2);
	fill('grey');
	holder.display();
	pop();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	connector1.display();
	connector2.display();
	connector3.display();
	connector4.display();
	connector5.display();
	 
   	activityButton.visible = false;
	highlighterBox1.visible = false;
	stopButton.visible = true;
	rearrangeButton.visible = true;
	homeButton.visible = true;
    highlighterBox2.visible = true;

    if(keyDown('w')){

		highlighterBox2.shapeColor = 'green';
	}
  
	
  
	if(keyDown('n')){
  
    	highlighterBox2.shapeColor = 'yellow';
	}

    /*if(mousePressedOver(stopButton)){

	   bob1.velocityX = 0;
	   bob1.velocityY = 0;

	   bob2.velocityX = 0;
	   bob2.velocityY = 0;

	   bob3.velocityX = 0;
	   bob3.velocityY = 0;

	   bob4.velocityX = 0;
	   bob4.velocityY = 0;

	   bob5.velocityX = 0;
	   bob5.velocityY = 0;
	}

	if( (bob1.velocityX === 0 && bob1.velocityY === 0)
	     && (bob5.velocityX === 0 && bob5.velocityY === 0)){

			if(mousePressedOver(rearrangeButton)){

				bob1.body.position.x = 190;
				bob1.body.position.y = 300;

				bob2.body.position.x = 220;
				bob2.body.position.y = 300;

				bob3.body.position.x = 250;
				bob3.body.position.y = 300;

				bob4.body.position.x = 280;
				bob4.body.position.y = 300;

				bob5.body.position.x = 310;
				bob5.body.position.y = 300;
		   }

        if(mousePressedOver(homeButton)){

			observationState = ACTIVITY;
		}
	}*/
   }

  //console.log(world);

  Engine.update(engine); 
  
  drawSprites();

   stroke('red');
   strokeWeight(2);
   textSize(17);
   fill('blue');
   text("@hemangPresents",650,17);

   if(observationState === HOME){

	stroke('blue');
	strokeWeight(11);
	fill('red');
	textSize(45);
	text("HOME",30,70);
	stroke('white');
	strokeWeight(6);
	fill('blue');
	textSize(21);
	text("Hey!, is your brain filled with questions about",205,110);
	text("Newton's craddle? And, you wanna perform it? Then",168,140);
	text("you are at the absolute place! I am an online Newton",167,170);
	text("that loves to help people in Science with the",205,200);
	text("activities,concepts same in a way physical Newton",173,230);
	text("explained. Be ready, stack your eyes on the screen",170,260);
	text("and proceed by clicking on the activity button or",184,290);
	text("pressing the 'enter' key!",279,320)
	stroke('green');
	fill('green');
	text("________________________________________________________",70,340);
   }

   if(observationState === ACTIVITY){

	stroke('blue');
	strokeWeight(9);
	fill('red');
	textSize(45);
	text("ACTIVITY",30,70);

	/*if((bob1.isTouching(bob2) || bob2.isTouching(bob3) || 
	   bob3.isTouching(bob4) || bob4.isTouching(bob5)) &&
	   (bob1.velocityX > 0 || bob1.velocityX < 0 || 
		bob1.velocityY > 0 || bob1.velocityY < 0) && 
	   (bob5.velocityX > 0 || bob5.velocityX < 0 ||
	    bob1.velocityY > 0 || bob1.velocityY < 0)){

		stroke('red');
		text("Transfer of energy,thus",xOffset,yOffset);
		text("Transfer of Momentum",xOffset,(yOffset - 20));

	}*/
   }
}



