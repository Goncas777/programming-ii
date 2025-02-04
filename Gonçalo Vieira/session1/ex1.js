let arr = [3,45,1,4,2,3,3,1,2,3,4,5,6,2,3,4,5,6,2,1,5,6];

function findDuplicates(arr) {

    console.time("findDuplicates");
let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (duplicates.includes(arr[i])) {
            continue;
        }
        
        for (let j = i + 1; j < arr.length; j++) {
            if (duplicates.includes(arr[j])) {
                continue;
            }
           
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    console.log(duplicates);
}
findDuplicates(arr);

console.timeEnd("findDuplicates");