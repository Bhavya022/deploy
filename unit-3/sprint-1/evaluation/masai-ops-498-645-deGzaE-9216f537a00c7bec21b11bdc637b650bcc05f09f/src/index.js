// Problem 1. complete the below function
function school(schoolName,location,established,... subjects) {
 var obj={} 
 obj.name = `${schoolName}`;
 obj.location = location;
 obj.established = established; 
 obj.subjects=subjects; 

 obj.getGeneralInfo =()=>{
  return `${obj.name} was established in ${obj.established} at ${obj.location}.`
 } 

 obj.getSubjectsInfo =()=>{
  return `At ${obj.name} we teach ${subjects}.`
 } 
 return obj 
}

// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [ 
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];  


let outputArray  = inputArray.reduce((acc,item)=>{
  var obj={} 
  obj.productId = item.idMeal; 
  obj.productTitle = item.strMeal ; 
   for(let i in categoriesDirectory){
     if(i==item.Category){
      obj.Category=categoriesDirectory[i];
     }
   }
   for(let i in areasDirectory){
    if(i==item.Area){
      obj.Area = areasDirectory[i];
    }
   }
  acc.push(obj); 
  return acc;
},[]) 



export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
