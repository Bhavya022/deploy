function getData(data) {
    let promise = new Promise((resolve,reject)=>{ 
       if(isNaN(data)==false){
        reject("error");
       } else if(data%2==0){ 
        setTimeout(()=>{
       resolve("even");
        },4000);
       } 
       else{ 
        setTimeout(()=>{
      resolve("odd");
        },2000)
       }
    });
    return promise;
} 
let data =1;
let result = getData(data); 
    //console.log(abcd); 
   result
    .then((res)=>{
        console.log(res);
    }) 
    .catch((error)=>{ 
        console.log(error);
    });
export default getData ; 
