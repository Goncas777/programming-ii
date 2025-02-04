let arr = [32,4,200,40];

console.time("maxProductBruteForce");
function maxProductBruteForce(arr) {
    let maxProduct = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let product = arr[i] * arr[j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    console.log(maxProduct);
}

maxProductBruteForce(arr);

console.timeEnd("maxProductBruteForce");

console.time("maxProductSorted");

function maxProductSorted(arr) {

    arr.sort(function(a, b) {
        return a - b;
    });

    let n = arr.length;


    let maxProduct = arr[n - 1] * arr[n - 2];

    console.log(maxProduct);
}

maxProductSorted(arr);


console.timeEnd("maxProductSorted");
