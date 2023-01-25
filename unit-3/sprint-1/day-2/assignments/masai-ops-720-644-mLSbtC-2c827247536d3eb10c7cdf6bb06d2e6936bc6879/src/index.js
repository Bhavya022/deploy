function studentData(firstName,lastName,age,marksArray,...hobbies) {
 let obj={}
  obj.fullName=`${firstName} ${lastName}`,
  obj.age = age,
  obj.hobbies = hobbies,
  obj.getInfo = function(){
    return `${firstName} ${lastName}'s age is ${age}.`
  }
 obj.getResult = function(){ 
  let total =0;
  for(let i=0;i<marksArray.length;i++){
  total+=marksArray[i];
  } 
  let avg = total/marksArray.length;
  if(avg>=50){
  return "Result: PASS"
  } 
  else{
    return "Result: FAIL"
  }
 }
  return obj 
}

export {
  studentData
}