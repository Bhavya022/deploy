// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById(
  "filter-more-than-equal-50"
);

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");
let welcomeUsernameSpan = document.getElementById("welcome-username");

let editRecipeInputId = document.getElementById("edit-recipe-input-id");
let editRecipeInputPrice = document.getElementById("edit-recipe-input-price");
let editRecipeButton = document.getElementById("edit-recipe-button");

let recipeData = [];

let userAuthToken, userInfo; 
loginUserButton.addEventListener("click",(e)=>{
  e.preventDefault() 
   fetch(`${baseServerURL}/login`,{
     method:'POST', 
     headers:{
     "Content-Type":"application/json",
     }, 
     body: JSON.stringify({
      username:"admin",
      password:"admin",
     }),
  }) 
     .then((res)=>res.json()) 
     .then((data)=>{ 
      console.log(data)
      userAuthToken = data.accessToken; 
      userInfo = data.user;  
      welcomeUsernameSpan.innerText=userInfo.username;
     
     fetchRecipesBtn.addEventListener("click",()=>{
      fetch(`${baseServerURL}/recipes`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${userAuthToken}`,
        },
      })   
      .then((res)=>res.json()) 
      .then((data)=>{
        console.log(data);
        renderCards(data)   

        sortAtoZBtn.addEventListener("click",()=>{
          data=data.sort((a,b)=>a.price-b.price) 
          renderCards(data);
        })  

        sortZtoABtn.addEventListener("click",()=>{
          data=data.sort((a,b)=>b.price-a.price);
          renderCards(data)
        }) 

        filterLessThan50Btn.addEventListener("click",()=>{
          data=data.filter(ele=>{
            return ele.price<250;
          })  
          renderCards(data)
        })  
        filterMoreThanEqual50Btn.addEventListener("click",()=>{
          data=data.filter(ele=>{
            return ele.price>=250
          }) 
          renderCards(data)
        })
      })  
      .catch((error)=>console.log(error))
     })
})  
    .catch((err)=>console.log(err))
})
    function renderCards(data){
      mainSection.innerHTML=null;
      let cardList =`<div class="card-list">${data.map((ele)=>cardList(ele.image,ele.id,ele.name,ele.instructions?ele.instructions.substring(0,40):"",ele.price)
      )
    .join(" ")}
    </div>`; 
    mainSection.innerHTML=`${cardList}`;
    }  

    function card(image,id,name,instructions,price){
      let card=`<div class="card" data-id=${id}>
      <div class="card-image"> 
      <img src=${baseServerURL}${image} alt="food">
      </div> 
      <div class="card-body"> 
      <h3 class="card-item card-title">${name}</h3> 
      <div class="card-item card-description">${instructions}</div> 
      <div class="card-item card-additional-info">${price}</div> 
      <a href="#" data-id=${id} data-name=${name} class="card-item card-link">EDIT</a>
      </div>
      </div>` 
      return card;
    }