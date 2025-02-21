import {sum, subtract} from "./math.js";


test('two plus two is four(arithmetic)', () => {  
    let result = sum(2,2);
    expect(result).toBe(4);  
  });  


test('two plus two is four', () => {  
    let result = 2+2;
    expect(result).toBe(4);  
  });  


  test('two minus two is four', () => {  
    let result = subtract(2,2);
    expect(result).toBe(0);  
  });

  test('two minus two is zero', () => {  

    let number1 = 2;
    let number2 = 2;
    expect(number1).toBeDefined();
    expect(number2).toBeDefined();
    expect(number1).toBeNaN();
    expect(number2).toBeNaN();
    expect(number1).toBe(2);  
    expect(number2).toBe(2); 
    expect(subtract()).toBeDefined();
    let result = subtract(number1,number2);
    expect(result).toBeDefined();
    expect(result).toBe(0);

  });


