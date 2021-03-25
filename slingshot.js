class slingshot {
    
    constructor (pointA,bodyB) {

        var options = {
            pointA : pointA,
            bodyB : bodyB,
            stiffness:0.004,
            length:30,
           
        }


        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyB = null;
      }
      attach(body){
        this.sling.bodyB = bodyB;

      }
    display () 
    {
        
        if(this.sling.bodyB){
           push(); 
        
        var pos = this.sling.bodyB.position;
        var posPoint = this.sling.pointA;
        stroke("white");
        strokeWeight(3);
        line (posPoint.x,posPoint.y,pos.x,pos.y);
        pop ();
        
        
        }
    }
    
}