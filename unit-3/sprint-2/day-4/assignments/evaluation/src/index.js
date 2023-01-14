// Problem 1. 

function Character() { 
    this.name='unnamed';
}
Character.prototype.setName=function(newName){
    this.name=newName;
} 
Object.setPrototypeOf(Warrior.prototype,Character.prototype);
function Warrior() {
Character.call(this);
this.strength=0;
}
Warrior.prototype.increaseStrength=function(){
    this.strength=this.strength+100;
} 
Warrior.prototype.decreaseStrength=function(){
    this.strength=this.strength-100;
} 
Object.setPrototypeOf(Knight.prototype,Warrior.prototype);
function Knight() {
Character.call(this);
Warrior.call(this);
this.weapon ='no weapon';
}
Knight.prototype.setWeapon=function(newWeapon){
    this.weapon= newWeapon;
}
// Problem 2.

class Vehicle {

}

class Car {

}

class Truck  {

}

class Motorcycle  {

}

export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}