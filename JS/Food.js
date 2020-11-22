// created the Food class
class Food{
    constructor(){
 
// created variables inside the constructor()
        this.foodStock;
        this.lastFed;
        this.image = milkImg;
    }

    getFoodStock(){
 
// getting the 'Food' data from database
        this.foodStock = database.ref('Food');
        this.foodStock.on("value",function(data){
          stock = data.val();
        });

    }

    getLastFed(){
   
// getting the 'FeedTime' data from database
        this.foodStock = database.ref('FeedTime/lastFed');
        this.foodStock.on("value",function(data){
          lastFed = data.val();
        });

    }

    updateFoodStock(){

// increasing the 'Food' and updating it
        stock += 1;
        if(stock <= 30){
            database.ref("/").update({
                Food:stock
            });
        }
       
    }

    deductFood(){

// decreasing the stock and updating it
        stock -= 1;
        if(stock > 0){
            imgCode = 2;
        }
        if(stock >= 0){
            database.ref("/").update({
                Food:stock
            });
        }
        
    }

    

    display(){
       
        var x =80, y = 100;
        this.getFoodStock();
        this.getLastFed();
        imageMode(CENTER);
        image(this.image, 387, 360 ,70,70);
        if(stock !=  0){
            for(var i = 0 ;i < stock; i ++){
                if(i%10 === 0){
                    x= 80;
                    y = y+50;
                }
                image(this.image, x, y ,50,50);
                x = x+30;
            }
        }

    }

                                                
}