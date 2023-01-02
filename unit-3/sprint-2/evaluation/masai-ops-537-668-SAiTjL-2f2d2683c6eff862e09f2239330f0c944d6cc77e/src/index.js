// Problem 1. 

function Character() {
 this.name = "unnamed" 
}
Character.prototype.setName = function(setName){
    return this.name=setName;
} 
Object.setPrototypeOf(Warrior,Character) 
Object.setPrototypeOf(Knight,Character)
function Warrior() {
    this.strength=0;
}   
Warrior.prototype.increaseStrength=function(increaseStrength){
    return  this.strength=`${this.strength}+100`
} 
Warrior.prototype.decreaseStrength=function(decreaseStrength){
    return this.strength=`${this.strength}-100`
}
function Knight(){ 
    this.weapon = "no weapon"
}   
Knight.prototype.setWeapon = function(setWeapon){
    return this.weapon = setWeapon ;
}

Object.setPrototypeOf(Warrior,Character);
let c = new Character(); 
console.log(c) 
c.setName('Williams');
console.log(c); // { name: 'Williams' } 
let w = new Warrior();
console.log(w); // { name: 'unnamed', strength: 0 }
w.setName('Williams');
console.log(w); // { name: 'Williams', strength: 0 }
w.increaseStrength();
w.increaseStrength();
console.log(w); // { name: 'Williams', strength: 200 }
w.decreaseStrength()
console.log(w); // { name: 'Williams', strength: 100 } 
let k = new Knight();
console.log(k); // { name: 'unnamed', strength: 0, weapon: 'no weapon' }
k.setName('William');
k.increaseStrength();
k.setWeapon('Sword');
console.log(k); // { name: 'William', strength: 100, weapon: 'Sword' }
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