// you can write your js code here 
let user = JSON.parse(localStorage.getItem("book-list"))||[]
let form = document.getElementById("form");
form.addEventListener("submit",submitform) 

function submitform(){ 
    const name = document.getElementById("name").value; 
    const author = document.getElementById("author").value;
    const desc = document.getElementById("desc").value; 
    const Added = document.getElementById("added").value;
    const book = document.getElementById("category").value;  
    const price = document.getElementById("price").value;
    const obj ={name,author,desc,Added,book,price} 
    user.push(obj);
    localStorage.setItem("book-list",JSON.stringify(user));

}     
submitform();