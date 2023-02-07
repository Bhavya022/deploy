
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
Object.setPrototypeOf(Mammal.prototype,Animal.prototype)
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
Object.setPrototypeOf(Dog.prototype,Mammal.prototype)
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
  constructor(name,health,attackPower,weapon,armor){  
    super(name,health,attackPower)
    this.weapon=weapon, 
    this.armor=armor
  }
}
Warrior.prototype.attack = function(Character){
    if(this.weapon=="sword"){
      return  `${Character.health-=this.attackPower+10}`;
    }
} 
Warrior.prototype.defend=function(){
  return  `${this.health=this.health+10}`
}
export { Dog, Mammal, Animal, Character, Warrior }
