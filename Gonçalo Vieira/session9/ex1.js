const fs = require('fs');

function countWords(filename) {  
  const data = fs.readFileSync(filename, 'utf-8');  
  words = data.replace(/[.,]/g, '')
  words = words.split(' ')

  console.log(words);   
  
  return words.length;  
}  
console.time("Time");
console.log(countWords('poem.txt'));
console.timeEnd("Time");