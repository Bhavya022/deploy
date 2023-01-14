function getData(data) {
   return new Promise((resolve,reject)=>{
    if(typeof data==='string'){
        reject('error');
    } 
    if(data%2!=0){
        setTimeout(()=>{ 
            resolve('odd')
        },3000)
    } else{
        setTimeout(()=>{
            resolve('even')
        },4000)
    }
   }).then() 
} 

export default getData
