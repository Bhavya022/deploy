## Installation
```
npm i
```

## Test 
```
npm t
```

## Test (Watch mode)
```
npm t -- --watchAll
```

## file structure
most of your work would happen in `src/index.js` file.

## Problem statement 1. Constructor functions [7 Marks]

Imagine you are designing a game that involves characters with different abilities. 

You have a base constructor function called `Character` that has a `name` property and a method called `setName` to change the name. The `name` can only be set via `setName`. When a new object is created using the `Character` constructor function, its default name is 'unnamed';

Example invocation:
```
let c = new Character();
console.log(c); // { name: 'unnamed' }
c.setName('Williams');
console.log(c); // { name: 'Williams' }
```

You then have a constructor function called `Warrior`. Objects created using the `Warrior` constructor function is expected to inherit all the properties & methods of the `Character`. 

`Warrior` has a `strength` property and two methods called `increaseStrength` and `decreaseStrength`. `strength` by default is `0` and can only be changed via `increaseStrength` & `decreaseStrength`. `increaseStrength` is expected to increase the strength by `100` and the `decreaseStrength` is expected to decrease the strength by `100`.

Example invocation: 

```
let w = new Warrior();
console.log(w); // { name: 'unnamed', strength: 0 }
w.setName('Williams');
console.log(w); // { name: 'Williams', strength: 0 }
w.increaseStrength();
w.increaseStrength();
console.log(w); // { name: 'Williams', strength: 200 }
w.decreaseStrength()
console.log(w); // { name: 'Williams', strength: 100 }
```

Finally you have a third level of inheritance. You have a constructor function called `Knight`. A `Knight` is expected to inherit all the properties and methods of a `Warrior`.

`Knight` has a property called `weapon` and a method called `setWeapon`. The value of `weapon` by default is 'no weapon' and it can be changed only via `setWeapon`.

Example invocation:
```
let k = new Knight();
console.log(k); // { name: 'unnamed', strength: 0, weapon: 'no weapon' }
k.setName('William');
k.increaseStrength();
k.setWeapon('Sword');
console.log(k); // { name: 'William', strength: 100, weapon: 'Sword' }
```

You are expected to create a prototypical chain between the methods of different constructor functions here.


## Problem statement 2. ES6 Classes [3 Marks]

Imagine you are designing a program to track information about different types of vehicles. You are expected to create a base class called `Vehicle` that has a `make` property and a method called `setMake` to change the make. 

Example invocation:
```
let v = new Vehicle('123');
console.log(v); // { make: '123' }
v.setMake('ABC');
console.log(v); // { make: 'ABC' }
```

You then need to create subclasses for specific types of vehicles, such as `Car`, `Truck`, and `Motorcycle`, each of which has additional properties and methods specific to those types of vehicles.

All `Car`, `Truck` & `Motorcycle` are expected to extend `Vehicle`.

`Car` has an additional property called `model`

Example invocation:
```
let c = new Car('123', 'XYZ');
c.setMake('ABC');
console.log(c); // { make: 'ABC', model: 'XYZ' }
```

`Truck` has an additional property called `bedSize`

Example Invocation:
```
let t = new Truck('123', 200);
t.setMake('AAA');
console.log(t); // { make: 'AAA', bedSize: 200 }
```

`Motorcycle` has an additional property called `engineSize`

Example invocation: 
```
let m = new Motorcycle('123', 455);
m.setMake('BBBB');
console.log(m); // { make: 'BBBB', engineSize: 455 }
```

## Notes/Suggestions from IA's
- Read the the problem slowly are carefully multiple times
- Keep committing your code at regular intervals
- Copy the example invocation to the `index.js` file. In that way, if the tests are running in the watch mode, you will be able to see the output in the integrated terminal. For example, while working on the `Character` constructor function, copy these lines of code to your index.js file

```
  function Character() {

  }

  let c = new Character();
  console.log(c); // { name: 'unnamed' }
  c.setName('Williams');
  console.log(c); // { name: 'Williams' }
```