// Function constructor
function FourWheeler(model, color, speed, fuel,wheels) {
    this.model=model;
    this.color=color;
    this.speed=speed;  
    this.fuel = fuel;
    this.wheels = wheels;
}  
FourWheeler.prototype.setSpeed = function (newSpeed){
    return this.speed = newSpeed;
} 
FourWheeler.prototype.updateColor = function(newColor){
    return this.color = newColor;
} 
FourWheeler.prototype.updateFuel= function(newFuel){
    return this.fuel= newFuel;
}

// Parent object for Object.create 
let FourWheelerObject = Object.create(FourWheeler.prototype);

// Store function contructor object here
var car1 = new FourWheeler(2008,"red","100kmph","full","modified");

// Store Object.create here
var car2 = Object.create(car1);

export { car1, car2 };
