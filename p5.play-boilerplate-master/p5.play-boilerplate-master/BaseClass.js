class BaseClass {
    constructor(x, y, width, height, imageName) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage(imageName);
        this.color=color;
 
        World.add(world, this.body);
        this.visibility=255;
      }

      display(){
        var pos=this.body.position;
        var angle = this.body.angle;

        if (this.body.speed < 3 && this.visibility != 0){
        
          push();
          //translate(this.body.position.x, this.body.position.y);
          //rotate(angle);
          
          //fill(this.color);
          tint(this.visibility, this.color);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          //rectMode(CENTER);
          }

      }

      collision()
      {
     
     
      
       World.remove(world,this.body);
 this.visibility=0;
        //push();
        //this.visibility=this.visibility-5;
        //tint(255,this.visibility);
        ///image(this.image,this.body.position.x,this.body.position.y,50,50);
      //pop();
        
          // console.log("tinting " + this.visibility);
          // var pos=this.body.position;
          // push();
          // //if ( this.visibility <=0 )
          // //  World.remove(world,this.body);
                 // push();
                 //  this.visibility=this.visibility-5;
                 // pop();
          //fill(this.color);
          //  tint(this.visibility, this.color);
         
          // rectMode(CENTER);
          // rect(pos.x,pos.y,this.width,this.height);
          // pop();
      }
    
    };
