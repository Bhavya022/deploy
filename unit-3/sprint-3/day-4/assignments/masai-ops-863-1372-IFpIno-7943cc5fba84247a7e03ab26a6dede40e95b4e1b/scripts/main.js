// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
const mainContainer = document.getElementById("data-list-wrapper")
const pagination = document.getElementById("pagination-wrapper")
async function FetchUsersList(page=1){ //by default page =1 if argument not passed
  try{
  const userList_request = await fetch (`${baseServerURL}/users?_limit=10&_page=${page}`) 
  const total_item =userList_request.headers.get('x-Total-Count')  
  const total_pages = Math.ceil(total_item/10)
  const data = await userList_request.json() 
    console.log(data)  
    RenderUserData(data) 
    console.log("total_pages: "+total_pages)
    PaginationBtn(total_pages)
  } catch(err){
    console.log(err)
  } 
  
}  

// async function FetchUsersList(){
//   try{
//     const userList_request = await fetch(`${baseServerURL}/users?_limit=10`) 
//     const data = await userList_request.json() 
//     console.log(data) 
//   } catch(err){
//     console.log(err)
//   }
// } 
FetchUsersList(); 
function RenderUserData(userListArray){
  const cardList = `<div class='card-list'>
  ${userListArray.map((item)=>getCard(item.avatar,item.email,item.firstname,item.lastname,item.id)).join('')}
  </div>`  
  mainContainer.innerHTML= cardList 
}  

function getCard(avatar,email,firstname,lastname,id){
  const card = `<div class='card' data-id=${id}> 
  <div class='card_img'>
   <img src=${avatar} alt="${firstname} ${lastname} image"> 
  
  </div> 
  <div class="card-body">
  <h3 class="card_item card_title">${firstname} ${lastname}</h3> 
  <div class="card_item card_description">${email}</div>
  </div>
  </div>` 
  return card 
}
 
function PaginationBtn(page){
  let btn_arr=[] 
  for(let i=1;i<=page;i++){
    btn_arr.push(`<button class="pagination-button" data-page-number=${i}>${i}</button>`)
  }  
  pagination.innerHTML = btn_arr.join("")  

  let all_btns = document.querySelectorAll("#pagination-wrapper button")   
  for(let btn of all_btns){
    btn.addEventListener('click',(e)=>{ 
  
     const pg =e.target.dataset['pageNumber'] 
     console.log(e.target.dataset['pageNumber'])  
     //network request 
     FetchUsersList(pg)
    })
  }
}