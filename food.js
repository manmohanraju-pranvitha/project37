class  Food{
constructor(){
    this.foodStock=0;
    this.lastfed;
    this.image=loadImage("Milk.png");
    this.bedroom=loadImage("Bed Room.png");
    this.garden=loadImage("Garden.png");
    this.washroom=loadImage("Wash Room.png");
}
getfoodstock(){
  return this.foodStock;

}




updatefoodstock(foodStock){
  this.foodStock=foodStock;
}
getfedtime(lastfed){
    this.lastfed=lastfed;
}
detuctfood(){
    if(this.foodStock){
        this.foodStock=this.foodStock-1;
    }
}
bedroom(){
background(bedroom,550,500);
}
garden(){
    background(garden,550,500);

}
Washroom(){
    background(washroom,550,500);
}


display(){
    var x=80; var  y=100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
            x=80;
            y=y+50;}
        
        image(this.image,x,y,50,50);
        x=x+30;
    }
}
}
}