class rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{X:this.offsetX,y:this.offsetY}
        
        }
        this.Rope=Constraint.creat(options)
        World.add(world,this.rope)
        }
        display() {
            var pointA=this.Rope.bodyA.position;
            var pointB=this.Rope.bodyB.position;  
            strokeWeight(2);
            var Anchor1x=pointA.x
            var Anchor1Y=pointA.y
            var Anchor2X=pointB.x+this.offsetX
            var Anchor2X=pointB.y+this.offsetY
line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y) 
            }
}
