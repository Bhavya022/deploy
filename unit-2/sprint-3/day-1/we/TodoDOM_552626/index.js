let myform = document.getElementById("form");
let body = document.querySelector("tbody"); 

let a=10;

let data =JSON.parse( localStorage.getItem("UserData"));
if(data==null){
    data=[];
} 
data.forEach((element,index)=>{

    let tr = document.createElement("tr"); 
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");   
    let td3 = document.createElement("td");
    td1.innerText = element.task;
    td2.innerText = element.priority; 
    td3.innerText="Favourite";
    if(element.priority=="High"){
    td2.style.backgroundColor="red";
    } 
    else{
        td2.style.backgroundColor="green";
    } 
});
myform.addEventListener("submit",(event)=>{
event.preventDefault();

let formDara ={
    task: form.task.value,
    priority:form.priority.value,
} ;
//console.log(formDara); 
data.push(formDara); 
localStorage.setItem("UserData",JSON.stringify(data));
//console.log(data); 
tbody.innerHTML = null;
data.forEach((element,index)=>{

    let tr = document.createElement("tr"); 
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");   
    let td3 = document.createElement("td");
    td1.innerText = element.task;
    td2.innerText = element.priority;  
    td3.innerText="Favourite"; 
    td3.addEventListener("click",()=>{
        console.log(element);
    })
    if(element.priority=="High"){
    td2.style.backgroundColor="red";
    } 
    else{
        td2.style.backgroundColor="green";
    }
    tr.append(td1,td2,td3);
    tbody.append(tr);
});

}) ;
 