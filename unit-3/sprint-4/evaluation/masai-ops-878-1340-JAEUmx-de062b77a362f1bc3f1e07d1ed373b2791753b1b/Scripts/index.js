// Write code related to Home page here
var form = document.querySelector("form") 
let user = JSON.parse(localStorage.getItem("meets"))|| []
form.addEventListener("submit",()=>{ 
 
  var name = document.getElementById("name").value 
  var desc = document.getElementById("desc").value  
  var month = document.getElementById("month").value  
  var week = document.getElementById("week").value  
  var meet = document.getElementById("meetType").value   
  let obj={
    name,desc,month,week,meet
  }
  user.push(obj)  
  localStorage.setItem("meets",JSON.stringify(user)) 

})