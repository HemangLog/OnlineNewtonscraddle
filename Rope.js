class Rope{

    constructor(bodyA,bodyB){

        var options = {

            bodyA: bodyA,
            bodyB: bodyB,
            Stiffness: 1,
            length: 200,
          
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

  display(){
 
    var positA = this.chain.bodyA.position;
    var positB = this.chain.bodyB.position;

    /*stroke('yellow');
    strokeWeight('15/10');*/

    if(this.chain.bodyB === bob1.body){

      line(positA.x - 120,positA.y,bob1.body.position.x,bob1.body.position.y);
    }
      
    if(this.chain.bodyB === bob2.body){
      
      line(positA.x - 60,positA.y,bob2.body.position.x,bob2.body.position.y);
    }

    if(this.chain.bodyB === bob3.body){
      
      line(positA.x,positA.y,bob3.body.position.x,bob3.body.position.y);
    }

    if(this.chain.bodyB === bob4.body){
      
      line(positA.x + 60,positA.y,bob4.body.position.x,bob4.body.position.y);
    }

    if(this.chain.bodyB === bob5.body){
      
      line(positA.x + 120,positA.y,bob5.body.position.x,bob5.body.position.y);
    }
  }
}