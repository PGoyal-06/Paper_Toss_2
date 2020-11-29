class Dustbin{

    constructor(x,y,width,height){
    
     this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})  
      World.add(world,this.body)  
      this.w = width
    this.h = height
    this.image = loadImage("dustbingreen.png");
    }
    display(){
    push()
    fill("red")
     rectMode(CENTER)
     imageMode(CENTER)   
     image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
   //rect(this.body.position.x,this.body.position.y,this.w,this.h)
    pop()
    }
    }