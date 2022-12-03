// Write code related to dashboard page here 

let userData = JSON.parse(localStorage.getItem("task-list"))||[] 
let tbody = document.getElementById("dashboard_user_table") 
function showuser(){
    let userRow = document.createElement("tr"); 

    userData.map(function(user){
    let name = document.createElement("td") 
    let description = document.createElement("td");
    let startDate = document.createElement("td");
    let endDate = document.createElement("td");
    let priority = document.createElement("td");
    let add = document.createElement("td");
    name.textContent=user.name;
    description.textContent=user.description;
    startDate.textContent = user.startDate;
    endDate.textContent = user.endDate;
    priority.textContent = user.priority;
    add.textContent="Add" 
    add.addEventListener("click",function(){ 
    priority.push(user);
    localStorage.setItem("priority",JSON.stringify(priority)) 
    userData.splice(index,1) 
    localStorage.setItem("task-list",JSON.stringify(userData)) 
    })
    true.append(name,description,startDate,endDate,priority,add) 
    tbody.append(tr)
});

}