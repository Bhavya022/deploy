function job(delay, value) {
   return new Promise((resolve,reject)=>{
    let arr=[delay,value];
    setTimeout(()=>{
        resolve();
    },delay);
   }) 
}  
 let p1 = job(1000,10) 
 let p2 = job(3000,20) 
 let p3 = job(500,30) 
 let p4 = job(1500,40) ;


var results=[]; 
Promise.all([p1,p2,p3,p4]).then((res)=>{
    results.push(res)
})
console.log(results);
export { job, results };
