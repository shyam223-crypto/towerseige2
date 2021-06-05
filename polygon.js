class Polygon{
    constructor(x,y,r){
        var options={
            istatic:'true'
        }
            
        
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x,y,(r-20)/2,options)
        this.image=loadImage("polygon.png");
		World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER)
        imageMode(CENTER)
        image(this.image,0,0,80,80)
        ellipse(0,0,this.r, this.r);
        pop();
    }
}