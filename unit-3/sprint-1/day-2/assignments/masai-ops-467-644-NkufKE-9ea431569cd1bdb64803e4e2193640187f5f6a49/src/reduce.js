const arr =[ {firstName:"Akshay",LastName:"saini",age:"26"},
{firstName:"Akshay",LastName:"saini",age:"30"},
{firstName:"Akshay",LastName:"saini",age:"75"},
{firstName:"Akshay",LastName:"saini",age:"50"}]  

const output = arr.reduce(function(acc,curr){
    if(curr.age>30){
        acc.push(curr.firstName);
    } 
    return acc;
},[]);
console.log(output);