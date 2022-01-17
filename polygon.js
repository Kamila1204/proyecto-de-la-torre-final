class Polygon{
    constructor() {
        var options = {
          "density":1.5,
          "friction":1.0,
          "restitution":0.5           
        }
        polygon = Bodies.circle(50,200,20);
        World.add(world, polygon);
        

      }
      display(){
        
        imageMode(CENTER);
        image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
      }
}
