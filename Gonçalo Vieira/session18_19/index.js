import {coin,availablecrypto, all, validInfo, validoperation} from "./dataprocess.js";
import { allcommands } from "./info.js";
const args = process.argv.slice(2);



switch (true) {
    case args.length === 0:
        console.log('Invalid prompt');
        allcommands();
        break;
    case args[0].toLowerCase() === 'available' && args[1].toLowerCase() === 'cryptos':
        console.log('Available cryptocurrencies:');
        availablecrypto.forEach(crypto => console.log(crypto));
        break;
    case args[0].toLowerCase() === 'available' && args[1].toLowerCase() === 'info':
        console.log('Available info:');
        validInfo.forEach(info => console.log(info));
        break;
    case args[0].toLowerCase() === 'available' && args[1].toLowerCase() === 'operations':
        console.log('Available operations:');
        validoperation.forEach(operation => console.log(operation));
        break;
    case availablecrypto.includes(args[0].toLowerCase()) && validoperation.includes(args[1].toLowerCase()):
        coin(args[0].toLowerCase(),args[1].toLowerCase());
        break;
    case args[0].toLowerCase() === 'all' && Object.keys(validInfo).includes(args[1].toLowerCase()):
        all(args[1].toLowerCase());
        break;
    case args[0].toLowerCase() === 'helpme':
        allcommands();
        break;
    default:
        console.log('Unknown cryptocurrency or command. Use "helpme" to see available commands.');
}
