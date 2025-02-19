// Generator example
let a = [];
const fs = require('fs');
console.time("hey");
function* evenNumbers() {
    for(let num=1; num<5000001; num++){
        result=num*2;
        yield result;
    }
}

numbers = evenNumbers();
genNext = true

while (genNext){

    let nextItem = numbers.next();
    genNext = !nextItem.done;
    if(genNext){
        console.log(nextItem.value);
        a.push(nextItem.value)
        
    }

}
fs.writeFileSync('nums.json', JSON.stringify(a, null, 2), 'utf8');
console.timeEnd("hey");