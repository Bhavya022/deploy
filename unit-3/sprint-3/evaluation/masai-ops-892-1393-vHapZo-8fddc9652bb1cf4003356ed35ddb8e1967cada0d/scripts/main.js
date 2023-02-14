// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------


const userLoginURL = `${baseServerURL}/login`;
const urlTodos = `${baseServerURL}/todos/`;

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let getTodoButton = document.getElementById("fetch-todos");

let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending"); 

let userAuthToken = localStorage.getItem("accessToken")||null

loginUserButton.addEventListener('click',loginuser)
async function loginuser(){  
  const obj={
    username:loginUserUsername.value ,
    password:loginUserPassword.value
  }
  console.log(obj)  
  loginu(obj)
}  
async function loginu(data){ 
  try{
  const login_req = await fetch(`${userLoginURL}`,{ 
    method:'POST',
    header:{
      "Content-type":"application/json" 
    } ,
    body:JSON.stringify(data) 
  
  })
    let da= login_req.json()
    console.log(da) 
    notificationWrapper.innerHTML=`hey ${data.username}, welcome back! message.`
  }
  catch(err){
    console.log(err)
  }
}
  

function login(username,pass){
  fetch(`${userLoginURL}`,{
    method:'POST',
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify({
      username:username,
      pass:pass,
    })
  }) .then((res)=>res.json()) 
  .then((data)=>console.log(data))
} 

getTodoButton.addEventListener('click',async function(){
  try{
let res = fetch(`${urlTodos}`,{
  method:"GET",
  header:{
    "Content-Type":"application/json",
    "Authorization": `Bearer ${userAuthToken}`  
  }
})
  } 
  catch(err){
    console.log(err)
  }
})