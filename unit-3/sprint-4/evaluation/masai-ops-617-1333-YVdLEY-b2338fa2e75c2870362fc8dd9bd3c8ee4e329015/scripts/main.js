// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];  
function fetchAndRenderCats(queryParamString = null){
    fetch(`${baseServerURL}/cats${queryParamString?queryParamString:""}`) 
    .then((res)=>res.json())   
    console.log(data)
    .then((data)=>{
        let catObj = data.map((item)=>({
            id:item.id,
            imageUrl:`${baseServerURL}${item.image}`,
            title :item.name,
            description:item.description.subString(0,75),
            cost:item.cost


        }));
        catsData = catObj ;
        renderCardList(catObj)
    }) 
};


function  renderCardList(cardData){
    let cardList = ` <div class="card-list">
        ${cardData.map((item)=> getCard(
            item.image,
            item.name,
            item.description,
            item.cost
        ) 
        )
       .join("") }
    </div>`}  

    function getCard(image,title,description,cost){
       let card = `<div class="card" data-id=${id}>
       <div class="card_img">
       <img src=${imageUrl} alt="cat"/>
       </div>
       <div class="card_body"> 
       <h3 class="card_item card_title">${title}</h3>
       <div class="card_item card_description">${description}</div> 
       <div class="card_item card_additional_info">${cost}</div>
       </div>
       </div>` ;
       return card;
    }   

