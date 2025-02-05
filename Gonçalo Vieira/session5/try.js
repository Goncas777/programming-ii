const users = [
    { id: 1, name: 'Alice', city: 'Paris' },
    { id: 2, name: 'Bob', city: 'London' },
    { id: 3, name: 'Charlie', city: 'Paris' }
  ];

function mapeado(users){
    const cityMap = new Map();
    
    users.forEach(user => {
        if(cityMap.has(user.city)){
            cityMap.get(user.city) .push(user);
        } else{
            cityMap.set(user.city,[user]);
        }
    })
    return cityMap;
}
  
const agrupado = mapeado(users);

console.log(agrupado);

