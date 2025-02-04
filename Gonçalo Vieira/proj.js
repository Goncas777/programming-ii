console.time("lol");

function fact(num) {


    if (num == 0 || num == 1) {
        return 1;
    }
    return num * fact(num - 1);

}

function principal(numero){
    const exec = fact(numero)

    for(let i = 0; i < exec; i++){
        console.info(`Execução numero ${i+1}`);
        console.info(fact(numero))
    }
}


principal(4);

console.timeEnd("lol");