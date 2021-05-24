class Bob{

    constructor(){

    var options = {

      isStatic: true

    }

      
    

    this.body = Body.create(330,330,options);
    this.image = loadImage("pendulumBob.png");
    World.add(world,this.body);
  }

  display(){
  
       var qua = this.body.position;

        imageMode(CENTER);
          if(this.body === bob1.body){

            image(this.image,330,330,60,60);
          }

          if(this.body === bob2.body){

            image(this.image,390,330,60,60);
          }

          if(this.body === bob3.body){

            image(this.image,450,330,60,60);
          }

          if(this.body === bob4.body){

            image(this.image,510,330,60,60);
          }

          if(this.body === bob5.body){

            image(this.image,570,330,60,60);
          }
        
  }
}