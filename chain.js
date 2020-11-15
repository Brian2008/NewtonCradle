class Chain{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness: 0.04,
            length:100,
            pointB={x:this.offsetX, y:this.offsetY}
            

        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
}
display()
{
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;

    strokeWeight(2);

    var Anchor1X=pointA.X
    var Anchor1Y=pointA.Y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.Y+this.offsetY

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}