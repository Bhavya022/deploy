// Write code related to Calender page here 
let user = JSON.parse(localStorage.getItem("meets"))||[] 
  
let cal=document.getElementsByClassName("calender")
let w1=document.getElementById("Week-1")

let w2=document.getElementById("Week-2") 

let w3=document.getElementById("Week-3")  

let w4=document.getElementById("Week-4") 
function form(month){
    user.forEach(element => {   
        let main = document.createElement("div")
        let name = document.createElement("p")  
        let desc = document.createElement("p")  
        let meetType = document.createElement("p")  
        let week = document.createElement("select")  
        let del= document.createElement("button")   
        let month=document.getElementById("month").value
        console.log(month)
       if(element.month==month && element.week=="Week-1" ){
        name.textContent=element.name; 
        desc.textContent=element.desc ;
        meetType.textContent=element.meet ;
        week.append(cal)
        del.textContent="DELETE"
        main.append(name,desc,meetType,week,del)  
        w1.append(main)
        
       }  
       if(element.month==month && element.week=="Week-2" ){
        name.textContent=element.name; 
        desc.textContent=element.desc ;
        meetType.textContent=element.meet ;
        week.append(cal)
        del.textContent="DELETE"
        main.append(name,desc,meetType,week,del)  
        w2.append(main)
        
       }  
       if(element.month==month && element.week=="Week-3"){
        name.textContent=element.name; 
        desc.textContent=element.desc ;
        meetType.textContent=element.meet ;
        week.append(cal)
        del.textContent="DELETE"
        main.append(name,desc,meetType,week,del)  
        w3.append(main)
        
       }  
       if(element.month==month && element.week=="Week-4" ){
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
 function val(){
    let month=document.getElementById("month").value
        console.log(month) 
        displayweek(month)
 }  

 function displayweek(data="January"){
    w1.innerHTML="" 
    w2.innerHTML=""  
    w3.innerHTML=""  
    w4.innerHTML=""  
    let filtermonth = user.filter((ele,index)=>{
        return ele.month == data
    }) 
    filtermonth.forEach((ele,index)=>{
        if(ele.week=="Week-1"){
            let getcards = cards(ele) 
            w1.append(getcards)
        } 
       else if(ele.week=="Week-2"){
            let getcards = cards(ele) 
            w2.append(getcards)
        } 
      else  if(ele.week=="Week-3"){
            let getcards = cards(ele) 
            w3.append(getcards)
        } 
      else  if(ele.week=="Week-4"){
            let getcards = cards(ele) 
            w4.append(getcards)
        }
    })
 }
 function cards(ele){
    let div = document.createElement("div") 
    div.innerHTML=`<p>${ele.name}</p> <p>${ele.desc}</p> <p>${ele.meet}</p><select><option value="Week-1">Week-1</option>
    <option value="Week-1">Week-2</option> 
    <option value="Week-1">Week-3</option>
    <option value="Week-1">Week-4</option></select>` 
    return div
 }