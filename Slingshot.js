class Slingshot{
constructor(bodyA,point){

var options={
    bodyA:bodyA,
    pointB:point,
    stiffness:0.3,
    length:10
}
this.sling=Constraint.create(options);
this.abc=point;
World.add(world,this.sling);
}
fly(){
    this.sling.bodyA=null;
}
display(){
    if(this.sling.bodyA){

  
   var pointA=this.sling.bodyA.position;
 // var p=this.abc;
line(pointA.x,pointA.y,this.abc.x,this.abc.y);
}
}
}