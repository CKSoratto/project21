class ground {

  constructor(x, y, width, height){

    var options={

     isStatic: true

    }

    this.body = Bodies.rectangle(x, y, width, height, options)
    this.height = height
    this.width = width
    World.add(world, this.body)

    

  }
  
  display(){

  rect(this.body.position.x)



  }








}

































