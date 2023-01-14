// you can write your js code here       



let user = JSON.parse(localStorage.getItem("buy-list"))||[] 
let tbody = document.getElementById("buy")

function submitform(){  

     tbody.innerHTML=""
     user.forEach(function(element) {
         let tr = document.createElement("tr") 
         let name = document.createElement("td");
         let author = document.createElement("td");
         let desc = document.createElement("td");
         let added = document.createElement("td");
         let category = document.createElement("td");
         let price = document.createElement("td");
         
 
         name.textContent=element.name;
         author.textContent = element.author;
         desc.textContent = element.desc;
         added.textContent = element.Added;
         category.textContent = element.book;
         price.textContent = element.price;

      tr.append(name,author,desc,added,category,price) 
      tbody.append(tr)
     });
 }    
 submitform();