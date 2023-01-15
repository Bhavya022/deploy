
let input = document.getElementById("form") 
let id = document.getElementById("id").value
let name = document.getElementById("name").value 
let age = document.getElementById("age").value
let des = document.getElementsByName("desc").value 
let pri = document.getElementById("pri").value 
let vacc = document.getElementById("vacc").value  
let submit = document.getElementById("submit") 

submit.addEventListener("submit",(e)=>{  
   let user = JSON.parse(localStorage.getItem("reg"))|| [] 
   e.preventDefault() 
   let obj ={
    id:id , 
    name:name ,
    age:age ,
    des:des ,
    pri:pri,
    vacc:vacc

   }  
   user.push(obj) 
   localStorage.setItem("reg",JSON.stringify(user)) 
   console.log(user) 
   
}) 