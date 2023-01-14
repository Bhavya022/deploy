// Write code related to Home page here  
var name = document.getElementById("name").value;
var desc = document.getElementById("desc").value;
var date = document.getElementById("addDate").value;
var dead = document.getElementById("deadline").value
var pri = document.getElementById("priority").value ;
var submit = document.getElementById("submit");  
let cont = document.getElementById("cont") 
let user =[] ||JSON.parse(localStorage.getItem("todos"))
//console.log(name,desc,date,dead,pri)
function store(){
    var name = document.getElementById("name").value;
var desc = document.getElementById("desc").value;
var date = document.querySelector('input[type="date"]').value;
var dead = document.getElementById("deadline").value
var pri = document.getElementById("priority").value ;
var status = "todo"
const obj={
    name:name,
    desc:desc,
    date:date,
    dead:dead,
    pri:pri, 
    status
}   
//console.log(obj) 
//alert(obj) 
user.push(obj)
  localStorage.setItem("todos",JSON.stringify(user)) 
 // localStorage.setItem("status",)

} 

cont.addEventListener("submit",store)


