// Write code related to Calender page here 
let user = JSON.parse(localStorage.getItem("meets"))||[] 
let month=document.getElementById("month").value  
let cal=document.getElementsByClassName("calender")
let w1=document.getElementById("Week-1")

let w2=document.getElementById("Week-2") 

let w3=document.getElementById("Week-3")  

let w4=document.getElementById("Week-4") 
function form(){
    user.forEach(element => {   
        let main = document.createElement("div")
        let name = document.createElement("p")  
        let desc = document.createElement("p")  
        let meetType = document.createElement("p")  
        let week = document.createElement("select")  
        let del= document.createElement("button") 
       if(element.week=="Week-1"){
        name.textContent=element.name; 
        desc.textContent=element.desc ;
        meetType.textContent=element.meet ;
        week.append(cal)
        del.textContent="DELETE"
        main.append(name,desc,meetType,week,del)  
        w1.append(main)
        
       }  
       if(element.week=="Week-2"){
        name.textContent=element.name; 
        desc.textContent=element.desc ;
        meetType.textContent=element.meet ;
        week.append(cal)
        del.textContent="DELETE"
        main.append(name,desc,meetType,week,del)  
        w2.append(main)
        
       }  
       if(element.week=="Week-3"){
        name.textContent=element.name; 
        desc.textContent=element.desc ;
        meetType.textContent=element.meet ;
        week.append(cal)
        del.textContent="DELETE"
        main.append(name,desc,meetType,week,del)  
        w3.append(main)
        
       }  
       if(element.week=="Week-4"){
        name.textContent=element.name; 
        desc.textContent=element.desc ;
        meetType.textContent=element.meet ;
        week.append(cal)
        del.textContent="DELETE"
        main.append(name,desc,meetType,week,del)  
        w4.append(main)
        
       }  
       
        
    
         
        
    });
    
}
 
form()