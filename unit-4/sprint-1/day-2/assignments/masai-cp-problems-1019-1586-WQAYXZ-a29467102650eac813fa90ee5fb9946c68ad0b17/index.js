const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
//console.log(operation,file,content)
switch (operation) {
  // complete the fillowing function. 
  case 'read':
  let data=fs.readFileSync(file,{encoding:"utf-8"})
    
      console.log(data)
     break 
     case 'append':
       //fs.appendFileSync(file,"\nCONTENT") 
       //let append=fs.readFileSync(file,{encoding:"utf-8"})
      //console.log(append)  
       fs.appendFile(`${file}`, `\n${content}`, function (err) {
         if (err) throw err;
        console.log(`${content} appended to the file ${file}`);
       });
       break  
       case 'delete':
        fs.unlinkSync(file) 
        break 
        case 'create':
          fs.writeFile(`${file}`,`\n${content}`,(err)=>{
            if(err) 
            console.log(err) 
            else{
              console.log(`File "${file}" created`)
            }
          }) 
          break 
     case 'rename':
      fs.rename(`${file}`,`${content}`,(err)=>{
        if(err){
          console.log(err)
        } 
        else{
        console.log(`File ${content} renamed to ${content}`)
        }
      }) 
      break  
      case 'list': 
      fs.readdir(path, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
        break
  default:
    console.log(`Invalid operation '${operation}'`);
}
