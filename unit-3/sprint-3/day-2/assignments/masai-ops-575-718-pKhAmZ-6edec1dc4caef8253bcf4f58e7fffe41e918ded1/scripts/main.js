// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper"); 
let empName = document.getElementById("employee-name") 
let empAvtar = document.getElementById("employee-image") 
let empDept = document.getElementById("employee-dept") 
let empSalary = document.getElementById("employee-salary") 
const addEmployeeBTN = document.getElementById("add-employee") 
//-----POST EMPLOYEE
addEmployeeBTN.addEventListener("click",()=>{
  let newUserObj = {
    name : empName.value,
    image:empAvtar.value,
    department:empDept.value,
    salary:empSalary.value
  }  
  newUserObj(newUserObj)
})
function newUser(newUserObj){
  fetch(employeeURL,{
    method:"POST",
    headers:{
      "Content-Type":"application/json" 
    }, 
    body:JSON.stringify(newUserObj)
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
}  
//--------------------------------------------------------------------
var forSortData = [] 
//---------------Sort Low To High Employee -----------------------------------//
const sortHighToLowBTN = document.getElementById("sort-high-to-low") 
sortHighToLowBTN.addEventListener("click",()=>{
  let sortedEmpBySalary = forSortData.sort((a,b)=>{
    return b.salary-a.salary
  })  
  console.log(sortedEmpBySalary) 
  fetchData(sortedEmpBySalary)
})  
//----------------sort low to high Employee-------------------------------------
const sortLowToHighBTN = document.getElementById("sort-low-to-high")  
sortLowToHighBTN.addEventListener("click",()=>{
 let sortedEmpBySalary = forSortData.sort((a,b)=>{
  return a.salary-b.salary 
 })  
 console.log(sortedEmpBySalary); 
 fetchData(sortedEmpBySalary);
})     

//----------GET Employee------------------------------------------------------------------ 

let Display = document.querySelector(".main")  
let FetchEmployees = document.getElementById("fetch-employees")  
FetchEmployees.addEventListener("click",()=>{
  fetch(employeeURL,{
    method:"GET"
  }).then((res)=>{
    let Employee = res.map((item)=>{
      return {
        name:item.name,
        salary:item.salary,
        department:item.department,
        image:item.image,
        componyId:item.id 
      }
    })    
    forSortData = Employee 
    fetchData(Employee)
  }).catch((err)=>{
    console.log(err);
  })
})   

function fetchData(Employee){
  let cardList =`${Employee.map((item)=>  
    append(item.name,item.salary,item.department,item.image,item.componyId)
    ).join("")}` 
    Display.innerHTML = cardList
}   

function append(name,salary,department,image,componyId){
  let card =`<div><img src="${image}" alt="Employee_Avtar"> 
  <h3>${name}</h3>
  <p>${componyId}</p>  
  <p>${salary}</p> 
  <p>${department}</p>
  </div>`   
  return card 
}
getEmployeeButton.addEventListener("click",()=>{

})

fetch(employeeURL).then((res)=>{
  return res.json();
})
.then((data)=>{
  
})

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`; 


   

window.addEventListener("load",()=>{
  fetchAndRenderEmployees();
}) ;

let userObj={ 
  name:'Rushikesh',
  image:'/images/avatar/avatar1.jpeg' ,
  department:3, 
  

}
function fetchAndRenderEmployees(){
  fetch('http://localhost:9090/employees',{
   method:'POST',  
   headers:{
    'Content-Type':'application/json'
   },
   body:{
    "name":"Rushikesh",
    "image":"/images/avatar/avatar1.jpeg",
    "department":3,
    "salary":3000000
   }
  })
  .then((res)=>{
    return res.json()
  }) 
  .then((data)=>{
    console.log(data)
  }) 

}