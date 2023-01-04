import {  Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle } from '../index';

global.score = 1

let c = new Character();
let w = new Warrior();
let k = new Knight();

describe('constructor function problem', function(){
  test('objects are in the right format', () => {
    expect(typeof c).toBe("object");
    expect(typeof w).toBe("object");
    expect(typeof k).toBe("object");
    global.score += 1;
  });

  test('properties are existing in the objects', function(){
    expect(c.name).toBeDefined();
    expect(w.name).toBeDefined();
    expect(k.name).toBeDefined();

    expect(w.strength).toBeDefined();
    expect(k.strength).toBeDefined();

    expect(k.weapon).toBeDefined();

    expect(w.setName).toBeDefined();
    expect(w.hasOwnProperty("setName")).toBe(false);

    expect(k.setName).toBeDefined();
    expect(k.hasOwnProperty("setName")).toBe(false);

    expect(k.increaseStrength).toBeDefined();
    expect(k.hasOwnProperty("increaseStrength")).toBe(false);

    expect(k.decreaseStrength).toBeDefined();
    expect(k.hasOwnProperty("decreaseStrength")).toBe(false);

    global.score += 1;
  });

  test('objects to have correct initial values', function(){
    expect(k.name).toBe('unnamed')
    expect(k.strength).toBe(0)
    expect(k.weapon).toBe('no weapon')

    // ensure prototypical inheritance
    expect(w.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("increaseStrength")).toBe(false);
    expect(k.hasOwnProperty("decreaseStrength")).toBe(false);
    global.score += 1;
  })

  test('setName method to work properly', function(){
    c.setName('A');
    w.setName('B');
    k.setName('C');
    expect(c.name).toBe('A');
    expect(w.name).toBe('B');
    expect(k.name).toBe('C');

    // ensure prototypical inheritance
    expect(w.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("increaseStrength")).toBe(false);
    expect(k.hasOwnProperty("decreaseStrength")).toBe(false);

    global.score += 1;
  })

  test('strength methods to work properly', function(){
    w.increaseStrength();
    expect(w.strength).toBe(100);
    w.increaseStrength();
    expect(w.strength).toBe(200);
    w.decreaseStrength();
    expect(w.strength).toBe(100);

    k.increaseStrength();
    expect(k.strength).toBe(100);
    k.increaseStrength();
    expect(k.strength).toBe(200);
    k.decreaseStrength();
    expect(k.strength).toBe(100);

    // ensure prototypical inheritance
    expect(w.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("increaseStrength")).toBe(false);
    expect(k.hasOwnProperty("decreaseStrength")).toBe(false);

    global.score += 1;
  })

  test('weapon methods to work properly', function(){
    k.setWeapon('X');
    expect(k.weapon).toBe('X')

    // ensure prototypical inheritance
    expect(w.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("setName")).toBe(false);
    expect(k.hasOwnProperty("increaseStrength")).toBe(false);
    expect(k.hasOwnProperty("decreaseStrength")).toBe(false);
    global.score += 1;
  })
})

describe("es6 class problem", function () {
  let v = new Vehicle('v');
  let c = new Car('c','c2');
  let t = new Truck('t',100);
  let m = new Motorcycle('m', 100);

  test('objects are in the right format', () => {
    expect(typeof v).toBe("object");
    expect(typeof c).toBe("object");
    expect(typeof t).toBe("object");
    expect(typeof m).toBe("object");
    global.score += 1;
  });

  test('properties are existing in the objects', function(){
    expect(v.make).toBeDefined();
    expect(c.make).toBeDefined();
    expect(t.make).toBeDefined();
    expect(m.make).toBeDefined();

    expect(c.model).toBeDefined();
    expect(t.bedSize).toBeDefined();
    expect(m.engineSize).toBeDefined();

    global.score += 1;
  });

  test('ensure prototypical inheritance', function(){
    expect(c.setMake).toBeDefined();
    expect(c.hasOwnProperty("setMake")).toBe(false);

    expect(t.setMake).toBeDefined();
    expect(t.hasOwnProperty("setMake")).toBe(false);

    expect(m.setMake).toBeDefined();
    expect(m.hasOwnProperty("setMake")).toBe(false);

    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
