function getData(data) {
    let promise = new Promise((resolve,reject)=>{ 
       if(isNaN(data)==false){
        reject("error");
       } else if(data%2==0){ 
        setTimeout(()=>{
       resolve("even");
        },2000);
       } 
       else{ 
        setTimeout(()=>{
      resolve("odd");
        },4000)
       }
    })
}
let abcd = getData(data); 
    console.log(abcd); 
    abcd.then((res)=>{
        console.log(abcd);
    }) 
    .catch((error)=>{
        console.log(abcd);
    });
export default getData ; 
