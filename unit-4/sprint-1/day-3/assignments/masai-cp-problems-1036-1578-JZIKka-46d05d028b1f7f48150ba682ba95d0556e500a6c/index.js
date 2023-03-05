const fs = require('fs');



function isNumber(num) {
  if (typeof num == 'number') {
    fs.writeFileSync('test.txt', 'it is a Number.');
  } else {
    fs.writeFileSync('test.txt', 'it is Not a Number.');
  }
}

function isStr(str) {
  if (typeof str == 'string') {
    if(+str){
      fs.writeFileSync('test.txt', 'it is Not a String.');
    }else{fs.writeFileSync('test.txt', 'it is a String.');}
    
  } else {
    fs.writeFileSync('test.txt', 'it is Not a String.');
  }
}

function isArray(arr) {
  if (Array.isArray(arr)) {
    fs.writeFileSync('test.txt', 'it is a Array.\n');
  } else {
    fs.writeFileSync('test.txt', 'it is Not a Array.\n');
  }
}

function isObj(obj) {
  if (typeof obj == 'object' && obj !== null && !Array.isArray(obj)) {
    fs.appendFileSync('test.txt', 'this is a object.\n');
  } else {
    fs.appendFileSync('test.txt', 'this is not a object.\n');
  }
}

function cls(filename) {
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
    console.log('File deleted!');
  } else {
    console.log('File does not exist!');
  }
}

module.exports = { isNumber, isStr, isArray, isObj, cls };