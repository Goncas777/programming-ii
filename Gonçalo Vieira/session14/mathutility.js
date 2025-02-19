/** 
* @param {number[]} nums
* @returns {number}
*/

export function sum (nums){

    
    if(nums.length == 0){
        return console.log("Your array is empty");
    }
    let total = 0;

    for(let i=0; i<nums.length; i++){
        total=total+nums[i];
    }

    return total;
}


/**
 * @param {number[]} nums
 * @returns {number} 
 */

export function average (nums){

    if(nums.length == 0){
        return console.log("Your array is empty");
    }

    let total = 0;
    let media = 0;
    for(let i=0; i<nums.length; i++){
        total=total+nums[i];
    }

    media=total/nums.length;

    return media;
}



/**
 * @param {number[]} nums
 * @returns {number}
 */

export function median(nums){
    if(nums.length == 0){
        return console.log("Your array is empty");
    }

    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}