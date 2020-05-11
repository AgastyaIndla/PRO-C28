class Ground{

    constructor(){
       var ground_options={
           isStatic :true
       }
    
       this.ground = Bodies.rectangle(450,390,90,20,ground_options);
       World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,158,130);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,860,30);
    }
}