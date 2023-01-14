// Write code related to Home page here 

let userData = JSON.parse(localStorage.getItem("task-list"))||[]

let user = document.getElementById("form") 
  user.addEventListener("submit",submitUser);
function submitUser(e){
  e.preventDefault();
    const name = document.getElementById("name").value; 
    const description = document.getElementById("desc").value;
    const startDate = document.getElementById("start").value;
    const enddate = document.getElementById("end").value;
    const priority = document.getElementById("priority").value;
    const obj ={name,description,startDate,enddate,priority}
    console.log(obj);  
    userData.push(obj);
    localStorage.setItem("task-list",JSON.stringify(userData));
}