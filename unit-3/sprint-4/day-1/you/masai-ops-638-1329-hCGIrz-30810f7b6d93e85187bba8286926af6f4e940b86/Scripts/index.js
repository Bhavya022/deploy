// Write code related to Home page here  
var name = document.getElementById("name").value;
var desc = document.getElementById("desc").value;
var date = document.getElementById("addDate").value;
var dead = document.getElementById("deadline").value
var pri = document.getElementById("priority").value ;
var submit = document.getElementById("submit").value; 
console.log(name,desc,date,dead,pri)
function store(){
    var name = document.getElementById("name").value;
var desc = document.getElementById("desc").value;
var date = document.querySelector('input[type="date"]').value;
var dead = document.getElementById("deadline").value
var pri = document.getElementById("priority").value ;

const obj={
    name:name,
    desc:desc,
    date:date,
    dead:dead,
    pri:pri,
}   
//console.log(obj) 
//alert(obj)
  window.localStorage.setItem("todos",JSON.stringify(obj))
}




