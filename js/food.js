class Food{
    constructor(){
        this.milkImage=loadImage("../images/milk.png")
    }
    

    display(){
        var x=50;
        var y=100;
        for(var i=0;i<food;i++){
            x=x+25;
            if(i%10===0){
               x=50;
               y+=60
            }
            image(this.milkImage,x,y,50,50) 
        }
    }
}

