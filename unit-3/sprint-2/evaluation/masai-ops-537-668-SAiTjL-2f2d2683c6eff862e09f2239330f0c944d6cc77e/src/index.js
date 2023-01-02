// Problem 1. 

function Character(name) {
 this.name = "unnamed"; 
}
Character.prototype.setName = function(setName){
    return this.setName; 
}   
function Warrior(Strength) {
    this.strength=0;
}
Warrior.prototype.increaseStrength = function(){
      return this.strength = `${this.strength+100}`
}  
Warrior.prototype.decreaseStrength = function(){
    return this.strength = `${this.strength-100}`
}
function Knight() {

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