class Rect{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            
        }
        this.body = Bodies.rectangle(x, y,width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
          var pos=this.body.position;
          fill(225);
          rect(pos.x, pos.y, this.width, this.height);
      }
    }