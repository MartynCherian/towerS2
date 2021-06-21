class Block{
    constructor(x, y, width, height) {
        var options = {
                     restitution:0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage ("block.png")
        World.add(world, this.body);
        this.visibility = 255
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.body.speed < 3){
          imageMode (CENTER)
          image(this.image,pos.x,pos.y,this.width,this.height)
        }
        else{
          World.remove(world,this.body)
          push();
          this.visibility = this.visibility-5;
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          tint(255,this.visibility)
          image(this.image,pos.x,pos.y,this.width,this.height)
        pop();
      }
        
      }
}
