class Paper{

constructor(x,y,radius){

var options = {
isStatic:false, 
restitution : 0.3,
 friction: 0.5,
 density:0.5   
}

this.body = Bodies.circle(x,y,radius,options);
World.add (world,this.body);
this.r = radius;
this.image = loadImage("paper.png");
}

display(){

 //ellipseMode(RADIUS);   

    imageMode(CENTER)
 image(this.image,this.body.position.x,this.body.position.y+50,this.r,this.r);

//ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
}
}