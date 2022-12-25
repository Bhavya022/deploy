function studentData(firstName,lastName,age,marksArray,...hobbies) { 
  let obj={};
  obj.firstName='${firstName} S{lastName}';
  obj.age = age;
  obj.hobbies=hobbies; 
  obj.getInfo = function(){
    return '${firstName} ${lastName}';
  } 
  obj.getResult = function(){
    let marksTotal =0;
    for(let mark of marksArray){
      marksTotal+=mark;
    } 
    let no = marksArray.length;
    let avg = marksTotal/no;
    if(avg<50){
      return 'Result: FAIL'
    } 
    else{
      return 'Result: PASS'
    }
  }
  return obj;
}
 let studentobj =studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
 console.log("*********************************"); 
 console.log(studentobj);

export {
  studentData
}