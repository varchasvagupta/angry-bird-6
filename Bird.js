class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory=[];
   }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //this.body.position.x,this.body.position.y
    

    super.display();

 // [p1,p2,p3,....pn]  .. [[x1,y1],[x2,y2]......[xn,yn]]
   //var position =[p1];
   if(this.body.position.x>200 && this.body.velocity.x>10){
    var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
   }
   
   
   //this.trajectory[array][xory]
      ////this.trajectory[i][0]...xpostion of the bird which is stored in an array
      //this.trajectory[i][1].ypostion of the bird which is stored in an array//
      //display smoke images at p1,p2,p3,p4........trajectory
     for (var i=0; i< this.trajectory.length; i++){
       image (this.smokeImage ,this.trajectory[i][0],this.trajectory[i][1])
     }
  }
}
