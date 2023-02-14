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
let userobj = JSON.parse(localStorage.getItem("user"))|| null 

function userlogin(){
  fetch(userLoginURL,{
    method:'POST',
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify({
      username:"admin",
      pass:"admin"
    })
  }) .then((res)=>{return res.json()})
  .then((data)=>{console.log(data)
  localStorage.setItem("token",data.accessToken);
  localStorage.setItem("user",JSON.stringify(data))
})
}  
function greet(name){
  let greet=`<h5 class="notification-info">
  hey ${name} ,welcome back!
  </h5>` 
  notificationWrapper.innerHTML=greet;
}
loginUserButton.addEventListener('click',()=>{
  
  userlogin()
  let username=loginUserUsername.value ; 
  console.log(username) 
  greet(username)

})
  
async function loginu(data){ 
  try{
  const login_req = await fetch(userLoginURL,{ 
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

let todoData =[]
getTodoButton.addEventListener('click', function(){
  try{
let res =  fetch(`${urlTodos}`,{
  method:"GET",
  headers:{
    "Content-Type":"application/json",
    "Authorization": `Bearer ${userAuthToken}`  
  }
})  
const data =  res.json()  
console.log(data) 
todoData.push(data)
 rendercardlist(data)
  } 
  catch{
   // console.log(err)
  }
})  

function getCard(id,title,completed){
let card=`
<label class="todo-item-label">
<input class="todo-item-checkbox" data-id=${id} type="checkbox" checked>
${title}
</label>
` 
return card ;
}   
function rendercardlist(cardData){
  let cardlist =`
  <div class="todo-list-wrapper" class="todo-list-wrapper">
   ${cardData.map((item)=> getCard(
    item.id,
    item.title,
    item.completed
   )
   ).join("")
  }
  </div>
  ` 
  mainSection.innerHTML=cardlist
}

 sortHighToLow.addEventListener("click",()=>{
   let sortedData = tododata.sort((a,b)=>{
     return b.title-a.title
   }) 
   rendercardlist(sortedData)
 }) 
 sortLowToHigh.addEventListener("click",()=>{
   let sortedData = tododata.sort((a,b)=>{
    return a.title-b.title
   }) 
   rendercardlist(sortedData)
 }) 
 filterCompleted.addEventListener("click",()=>{
   let filterData = todoData.filter((e)=>{
     e.completed==true;
   })
 }) 
 filterPending.addEventListener("click",()=>{
  let filterData = todoData.filter((e)=>{
     e.completed==false;
   })
 })