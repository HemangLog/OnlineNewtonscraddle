class Holder{

   constructor(){

    var options = {

      isStatic: true
    }

    this.body = Bodies.rectangle(450,130,350,25,options);
    /*this.width = width;
    this.height = height;*/
    World.add(world,this.body);

   }

   display(){

    var charact = this.body.position;
 
    if(highlighterBox2.shapeColor === 'green'){

      holder.body.position.x = mouseX;
      holder.body.position.y = mouseY;
    }

    rectMode(CENTER);
    rect(charact.x,charact.y,350,25);
    
   }
}
