// Function constructor
function FourWheeler(model, color, speed, fuel,wheels) {
   this.wheels=wheels,
    this.model=model,
    this.color=color,
    this.speed=speed,
    this.fuel=fuel
}
// setSpeed (will accept a new value and re assign the existing speed property)
// updateColor (will accept a new value and re assign the existing speed color)
// updateFuel (will accept a new value and re assign the existing speed fule) 
FourWheeler.prototype.setSpeed = function(newSpeed){
    this.speed=newSpeed
} 
FourWheeler.prototype.updateColor=function(newColor){
    this.color=newColor
} 
FourWheeler.prototype.updateFuel = function(newFuel){
    this.fuel=newFuel
}
// Parent object for Object.create
let FourWheelerObject = (Object.create(FourWheeler.prototype));

// Store function contructor object here
var car1=new FourWheeler(2008,"red","100kmph","full","modified");

// Store Object.create here
var car2 = Object.create(car1);

export { car1, car2 };
