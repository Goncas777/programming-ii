console.log(hoistedVar); // Output: undefined
let hoistedVar = "I'm hoisted!";

notHoistedFunc(); // Error: notHoistedFunc is not a function
const notHoistedFunc = () => console.log("I won't work");

hoistedFunc(); // Output: "I work!"
function hoistedFunc() {
  console.log("I work!");
}

//Ao mudar para const ou let, o output muda tanto no primeiro como no segundo output. Em ambos vai dar o erro ReferenceError.
//Isto acontece porque o código nao vai logo alocar as variaveis porque estas nao sao declaradas como var. Caso seja var ou function, aí sim as variaveis sao alocadas.