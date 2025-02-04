let num=1200;
let arr=[];


function fibo(num){

    console.time("LEZGO");
        if(num < 1){
            return console.log("ERRO, tem de ser numero superior ou igual a 1")
        }
    
        if(num == 1 || num == 2){
            return console.log(1)
        }
        arr[0]=1;
        arr[1]=1;

    for(let i=2; i<num; i++){
        

        arr.push(arr[i-2]+arr[i-1]);

    }
    console.log(arr[arr.length-1]);

}

fibo(num);

console.timeEnd("LEZGO");