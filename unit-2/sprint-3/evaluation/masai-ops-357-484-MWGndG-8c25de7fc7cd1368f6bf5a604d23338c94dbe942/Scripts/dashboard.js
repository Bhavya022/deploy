// you can write your js code here   

let user = JSON.parse(localStorage.getItem("book-list"))||[]
let buy_list = JSON.parse(localStorage.getItem("buy-list"))||[] 
let bookmark_list = JSON.parse(localStorage.getItem("bookmark-list"))||[]
let book_count = document.getElementById("book-count");
let tbody = document.getElementById("dashboard"); 

let filterdo = document.getElementById("filter"); 
filterdo.addEventListener("change",filtero) 
function filtero(){
    let val = filter.value;
    user = JSON.parse(localStorage.getItem("book-list")) 
    if(val=="Fiction"){
       user = user.filter((el)=>el.book=="Fiction") 
       submitform() 
    } else if(val=="Self Help"){
        user = user.filter((el)=>el.book=="Self Help") 
        submitform() 
     } 
     else if(val=="Finance"){
        user = user.filter((el)=>el.book=="Finance") 
        submitform() 
     } 
     else{
        user = JSON.parse(localStorage.getItem("book-list")) 
        submitform()
     }
}

function submitform(){  

   book_count.textContent =user.length 
    tbody.innerHTML=""
    user.forEach(function(element,index ) {
        let tr = document.createElement("tr") 
        let name = document.createElement("td");
        let author = document.createElement("td");
        let desc = document.createElement("td");
        let added = document.createElement("td");
        let category = document.createElement("td");
        let buy = document.createElement("td");
        let bookmark = document.createElement("td");  
        let price = document.createElement("td");

        name.textContent=element.name;
        author.textContent = element.author;
        desc.textContent = element.desc;
        added.textContent = element.Added;
        category.textContent = element.book;
        price.textContent = element.price;
        buy.textContent="Buy"; 
        bookmark.textContent="Add";
        buy.addEventListener("click",function(){
            buy_list.push(element);
            localStorage.setItem("buy-list",JSON.stringify(buy_list)) 
            user.splice(index,1);
            localStorage.setItem("book-list",JSON.stringify(user)); 
            submitform()
        })  
        bookmark.addEventListener("click",function(){
            bookmark_list.push(element);
            localStorage.setItem("bookmark-list",JSON.stringify(bookmark_list)) 
            user.splice(index,1);
            localStorage.setItem("book-list",JSON.stringify(user)); 
            submitform()
        })
     tr.append(name,author,desc,added,category,buy,bookmark,price) 
     tbody.append(tr)
    });
}    
submitform();  