

import { schoolObj, areasDirectory, outputArray, school, inputArray, categoriesDirectory } from '../index';
global.score = 1

describe('schoolObj properties and expected return', function(){
  let so = s('A', 'B', 3, 'c', 'd', 'd', 'f', 'g');
  let data = school('A', 'B', 3, 'c', 'd', 'd', 'f', 'g')

  // marks: 1
  test('to be of type object', function(){
    expect(data && typeof data === 'object').toBe(true);
    global.score += 1;
  })

  // marks: 1
  test('to have name', function(){
    expect(data).toHaveProperty('name');
    expect(data.name).toBe(so.name);
    global.score += 1;
  })

  //marks: 1
  test('to have getGeneralInfo', function(){
    expect(data).toHaveProperty('getGeneralInfo');
    expect(typeof data.getGeneralInfo).toBe('function');
    expect(data.getGeneralInfo()).toBe(so.getGeneralInfo());
    global.score += 1;
  })

  // marks: 1
  test('to have getSubjectsInfo', function(){
    expect(data).toHaveProperty('getSubjectsInfo');
    expect(typeof data.getSubjectsInfo).toBe('function');
    expect(data.getSubjectsInfo()).toBe(so.getSubjectsInfo());
    global.score += 1;
  })
})

describe("objectFactory", function () {
  let oa = ss(inputArray);

  // marks: 1
  test("to match value of category", function () {
    expect(outputArray[0].Category).toBe(oa[0].Category);
    global.score += 1;
  });

  // marks: 1
  test("to match value of category", function () {
    expect(outputArray[1].Category).toBe(oa[1].Category);
    global.score += 1;
  });

  // marks: 1
  test("to match value of category", function () {
    expect(outputArray[2].Category).toBe(oa[2].Category);
    global.score += 1;
  });

  // marks: 1
  test("to match value of area", function () {
    expect(outputArray[0].Area).toBe(oa[0].Area);
    global.score += 1;
  });

  // marks: 1
  test("to match value of area", function () {
    expect(outputArray[1].Area).toBe(oa[1].Area);
    global.score += 1;
  });
});

function s(a,b,c,...d){return{name:a,getGeneralInfo:function(){return`${a} was established in ${c} at ${b}.`},getSubjectsInfo:function(){return`At ${a} we teach ${d.join(", ")}.`}}}
function ss(ia){return ia.map(e=>{let r={};return r.productId=e.idMeal,r.productTitle=e.strMeal,r.Category=categoriesDirectory[e.Category],r.Area=areasDirectory[e.Area],r})}

afterAll(() => {
  console.log("Final Score is", global.score);
});
