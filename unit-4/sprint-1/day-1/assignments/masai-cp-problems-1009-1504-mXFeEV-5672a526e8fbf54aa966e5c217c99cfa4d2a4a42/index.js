// index.js

//  import the crypto module



//  get a commands using process.argv
const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const operator1 = parseInt(argv[1])
const operator2 = parseInt(argv[2])

// complete the  function

 


switch (operation) {
  case 'add' :{
    console.log(operator1 + operator2); 
  break
}
case  'sub': 
    console.log(operator1 - operator2); 
        break

case 'mult': 
    console.log (operator1 * operator2); 
        break

case 'divide': 
    console.log(operator1 / operator2); 
        break
case 'sin': 
console.log(Math.sin(operator1)) 
break
case 'cos':
  console.log(Math.cos(operator1)) 
  break 
  case 'tan':
    console.log(Math.tan(operator1))
  default:
    console.log("Invalid operation");
}
