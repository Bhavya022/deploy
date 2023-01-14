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

## Problem statement. 1 [5 Marks]

The function `school() {}` should return an object.

Parameters of studentData:
```
schoolName: takes in a string value
location: takes in a string value
established: takes in a number value
After `established` all the arguments passed to the school function will be considered as subjects that school offers.
```

Example function invocation: 
```
school('ABC School', 'New Delhi', 1991, 'English', 'Hindi', 'Mathematics');
```

In the above invocation, 'English', 'Hindi' & 'Mathematics' are the subjects offered by the school.

The object must have the following one property: 

```
name: the schoolName
```

The object must have the following two methods:

`getGeneralInfo`: In the invocation example above, this method would return the string value "ABC School was established in 1991 at New Delhi."

`getSubjectsInfo`: In the invocation example above, this method would return the string value "At ABC School we teach English, Hindi, Mathematics."

## Problem statement. 2 [5 Marks]

You are provided with `inputArray`, `areasDirectory` & `categoriesDirectory`. 

```
let inputArray = [
  { idMeal: "52768", strMeal: "Apple Frangipan Tart", Category: 3, Area: 1 },
  { idMeal: "53049", strMeal: "Apam balik", Category: 3, Area: 2 },
  { idMeal: "52767", strMeal: "Bakewell tart", Category: 3, Area: 1 }
];
```

```
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};
```

areasDirectory after execution would look something like the following: 
```
{ 1: 'British', 2: 'Malaysian' }
```

We are expecting the following output: 
```
[
  { productId:"52768", productTitle:"Apple Frangipan Tart", Category:"Dessert", Area:"British" }, 
  { productId:"53049", productTitle:"Apam balik", Category:"Dessert", Area:"Malaysian" },
  { productId:"52767", productTitle:"Bakewell tart", Category:"Dessert", Area:"British" }
]
```
`idMeal` is mapped to `productId`

`strMeal` is mapped to `productTitle`

`Category` in the outputArray shows name instead of id

`Area` in the outputArray shows name instead of id
