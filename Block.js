class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density : 0.0001
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 3){
        var pos =this.body.position;
     
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        tint(255,this.visibility);
        
    pop();
      }
    }
    };

    
    
  
