// index.js

//  import the crypto module
//hrllon hujjkl


//  get a commands using process.argv 
const crypto = require('crypto')
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
    break 
    case 'random': 
    if(operator1){
      crypto.randomBytes(operator1, (err, buf) => {
        if (err) {
          // Prints error
          return "Provide length for random number generation."
          
        }
        else{
          
        if(buf.length==0){
        return   "Provide length for random number generation."
          
         }
        // Prints random bytes of generated data
        console.log(buf.toString('binary'));
        }
      })
      }
      else{
        console.log("Provide length for random number generation.")
      }
    
      
      break
  default:
    console.log("Invalid operation");
}
