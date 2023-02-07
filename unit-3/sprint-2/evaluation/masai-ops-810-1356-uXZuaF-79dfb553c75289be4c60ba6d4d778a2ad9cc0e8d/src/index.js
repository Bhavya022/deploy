
// Problem 1. 
function Animal(name, type) {
  this.name=name,
  this.type=type
}
Animal.prototype.makeSound = function(){
    return "Animal is making a sound"
} 
let a = new Animal("Charlie", "animal");
function Mammal (name, type, hasFur) { 
    Animal.call(this)
     this.name=name,
     this.type=type,
     this.hasFur=true 
  // super(Animal.prototype)
} 
Mammal.prototype.makeSound = function(){
    return "Mammal is making a sound"
} 
let m = new Mammal("Fluffy", "mammal", true);
function Dog(name, type, hasFur, breed) {
   Mammal.call(this) 
   this.name=name,
   this.type=type,
   this.hasFur=hasFur,
   this.breed=breed
}  
Dog.prototype.makeSound=function(){
    return "Woof Woof!"
}
//Object.setPrototypeOf(Mammal.prototype,Dog.prototype)
let d = new Dog("Fido", "dog", true, "Labrador");
class Character {
  constructor(name,health,attackPower){
    this.name=name,
    this.health=health,
    this.attackPower=attackPower
  }
}
Character.prototype.attack=function(name){

     return `${parseInt(name.health=this.health-this.attackPower)}`
   
} 
Character.prototype.isAlive = function(){
    if(this.health>0){
        return true
    } 
    else{
        return false
    }
}
class Warrior extends Character {
  constructor(weapon,armor){ 
    super(this.name,this.health,this.attackPower) 
    this.weapon=weapon, 
    this.armor=armor
  }
}
Warrior.prototype.attack = function(){
    if(this.weapon=="sword"){
      return  `${this.attackPower=this.attackPower+10}`;
    }
} 
Warrior.prototype.defend=function(){
  return  `${this.health=this.health+10}`
}
export { Dog, Mammal, Animal, Character, Warrior }
