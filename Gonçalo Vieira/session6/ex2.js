function flattenObject(obj, parent = '', result = {}) {
    // Iterate through each key in the object
    for (let key in obj) {
      // Check if the value is an object (and not an array or primitive value)
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recurse, append the current key to the parent path
        flattenObject(obj[key], parent ? `${parent}.${key}` : key, result);
      } else {
        // If it's a primitive value, add to result with the full path
        result[parent ? `${parent}.${key}` : key] = obj[key];
      }
    }
    return result;
  }
  
  const nested = {  
    a: 1,  
    b: { c: 2, d: { e: 3 } },  
    f: [4, 5]  
  };
  
  console.log(flattenObject(nested));
  