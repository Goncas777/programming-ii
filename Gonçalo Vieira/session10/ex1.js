console.log(hoistedVar); // Output: undefined
var hoistedVar = "I'm hoisted!";

notHoistedFunc(); // Error: notHoistedFunc is not a function
var notHoistedFunc = () => console.log("I won't work");

hoistedFunc(); // Output: "I work!"
function hoistedFunc() {
  console.log("I work!");
}

//O primeiro output dá undefined porque a var é alocada, no entanto a variavel é chamada antes de ser processado o conteudo da mesma, daí dar undifined

//O segundo output nao funciona porque as arrow functions nao sao alocadas logo de inicio como as funções e as var, entao ao executar o código é como se a função  nem estivesse declarada, daí dar o erro.
//Apesar de dar o erro de nao ser função pois esta nao é alocada, ele reconhece como sendo uma variavel, pois a função é declarada como var inicialmente

//O terceiro funciona pois a função é logo alocada, então ao executar o código, como ja sabe que aquela função existe, ele vai executar a mesma normalmente.