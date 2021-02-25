class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1
        }
        this.radius=radius;
        this.x=x;
        this.y=y
        this.image=loadImage("paper.png")
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}