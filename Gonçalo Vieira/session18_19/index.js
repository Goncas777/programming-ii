import {price,availablecrypto,variation,supply,about,all} from "./dataprocess.js";
const args = process.argv.slice(2);



if (args.length === 0) {
    console.log('Invalid prompt');
} else if (args[0] === 'cryptos') { 
    console.log('Available disponíveis:');
    availablecrypto.forEach(crypto => {
        console.log(crypto);
    });
} else if (availablecrypto.includes(args[0].toLowerCase()) && args[1] == "price") {
    price(args[0].toLowerCase());
} else if (availablecrypto.includes(args[0].toLowerCase()) && args[1] == "variation") {
    variation(args[0].toLowerCase());
} else if (availablecrypto.includes(args[0].toLowerCase()) && args[1] == "supply") {
    supply(args[0].toLowerCase());
} else if (availablecrypto.includes(args[0].toLowerCase()) && args[1] == "about") {
    about(args[0].toLowerCase());
} else if (availablecrypto.includes(args[0].toLowerCase()) && args[1] == "all") {
    all(args[0].toLowerCase());
} else {
    console.log('Unknown cryptocurrency or command. Use "helpme" to see available commands.');
}



