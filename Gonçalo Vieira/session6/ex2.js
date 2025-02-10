const nested = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [4, 5]
};

function traverse(obj, path = [], map = new Map()) {

  if (typeof obj !== 'object') {
    map.set(path.join('.'), obj);
    return;
  }
  for (const key in obj) {
    traverse(obj[key], [...path, key], map);
  }
  return map;
}




function traverse2(obj, path = []) {
  if (typeof obj !== 'object') {
    console.log(path.join('/'), ':', obj);
    return;
  }
  for (const key in obj) {
    traverse2(obj[key], [...path, key]);
  }
}




//Decidi fazer 2 funções para comparar o tempo de cada uma, uma tem o map e a outra da logo console log como o exemplo do git hub


console.time("Com Map");
console.log(traverse(nested));
console.timeEnd("Com Map");

console.time("Sem Map");
traverse2(nested);
console.timeEnd("Sem Map");

//Sem Map é bem mais rapido, quase 10x mais rapido