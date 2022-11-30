let myform = document.getElementById("form");
let body = document.querySelector("tbody");
let data = [];
myform.addEventListener("submit",(event)=>{
event.preventDefault();

let formDara ={
    task: form.task.value,
    priority:form.priority.value,
} ;
//console.log(formDara); 
data.push(formDara); 
//console.log(data); 
tbody.innerHTML = null;
data.forEach((element,index)=>{

    let tr = document.createElement("tr"); 
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");  
    td1.innerText = element.task;
    td2.innerText = element.priority;
    tr.append(td1,td2);
    tbody.append(tr);
});

}) ;