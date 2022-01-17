class Block{
    constructor(x, y, width, height) {
        var options = {
                  
        }
        
        this.image = loadImage("block.png"); 
        this.visibility = 255;  
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        console.log(this.body.speed);
        var pos=this.body.position;
        if(this.body.speed <6){
          //super.display();
          imageMode(CENTER);
          image(this.image,pos.x, pos.y, this.width, this.height);
         }
         else{
           World.remove(world, this.body);
           push();
           this.visiblity = this.visiblity - 5;
           tint(255,this.visiblity);
           image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
           //translate(pos.x, pos.y);
           //rotate(angle);
           //rectMode(CENTER);
           //rect(0,0,this.width, this.height);
           pop();
         }


        var angle = this.body.angle;
        var pos= this.body.position;
        
      }
}


