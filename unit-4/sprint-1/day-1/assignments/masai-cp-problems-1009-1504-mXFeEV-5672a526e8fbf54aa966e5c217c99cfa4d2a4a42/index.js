// index.js

//  import the crypto module



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
      crypto.randomBytes(operator1, (err, buf) => {
        if (err) {
          // Prints error
          console.log("Provide length for random number generation.");
          return;
        }
        else{
          
        if(buf.length==0){
          console.log("Provide length for random number generation."); 
          return 
        }
        // Prints random bytes of generated data
        console.log(buf.toString('binary'));
        }
      });
      break
  default:
    console.log("Invalid operation");
}
