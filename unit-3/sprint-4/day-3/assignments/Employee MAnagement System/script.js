
let form = document.querySelector("form") 
form.addEventListener("submit",function(e){
 e.preventDefault() 
 let id= document.getElementById("id").value;
 let name = document.getElementById("name").value; 
 let age = document.getElementById("age").value;
 let des = form.elements["des"].value;
 let pri = document.getElementById("pri").value
 let vacc = document.getElementById("vacc").value
 let OTP = Math.floor(Math.random()*9999)  
 console.log(id,name,age,des); 
  if(!des || !pri || !vacc){
     alert("Please pROVIDE ALL iNFORMATION")
 } 

 let regData = {id, name, age,des,  pri,vacc ,OTP}; 
 // console.log(regData); 
 // alert(regData)
 // getting the data from LS
 let data = JSON.parse(localStorage.getItem("reg")) || []; 
  if(id==data.id){
    alert("please enter unique id ")
  }
 data.push(regData)

 localStorage.setItem("reg", JSON.stringify(data))
        //alert("Registration Successfull !!")

})