import { coin, availablecrypto, all, validInfo, validoperation, saveToFile } from "./dataprocess.js";
import { allcommands } from "./info.js";

const args = process.argv.slice(2);

let saveOutput = false;
if (args.includes("save")) {
    saveOutput = true;
    args.pop(); // Remove 'save' from the arguments list
}

let output = "";

switch (true) {
    case args.length === 0:
        output = 'Invalid prompt';
        console.log(output);
        allcommands();
        break;
    case args[0].toLowerCase() === 'available' && args[1].toLowerCase() === 'cryptos':
        output = 'Available cryptocurrencies:\n' + availablecrypto.join("\n");
        console.log(output);
        break;
    case args[0].toLowerCase() === 'available' && args[1].toLowerCase() === 'info':
        output = 'Available info:\n' + Object.keys(validInfo).join("\n");
        console.log(output);
        break;
    case args[0].toLowerCase() === 'available' && args[1].toLowerCase() === 'operations':
        output = 'Available operations:\n' + validoperation.join("\n");
        console.log(output);
        break;
    case availablecrypto.includes(args[0].toLowerCase()) && validoperation.includes(args[1].toLowerCase()):
        coin(args[0].toLowerCase(), args[1].toLowerCase());
        break;
    case args[0].toLowerCase() === 'all' && Object.keys(validInfo).includes(args[1].toLowerCase()):
        const infoType = args[1].toLowerCase();
        output = `🌟 🔍 Crypto ${infoType.toUpperCase()} Table 🌟\n`;
        all(infoType);
        break;
    case args[0].toLowerCase() === 'helpme':
        allcommands();
        break;
    default:
        output = 'Unknown cryptocurrency or command. Use "helpme" to see available commands.';
        console.log(output);
}

if (saveOutput) {
    const filename = "crypto_output.txt";

    if (args[0].toLowerCase() === 'all' && Object.keys(validInfo).includes(args[1].toLowerCase())) {
        all(args[1].toLowerCase()).then(output => {
            saveToFile(filename, output);
        });
    } else if (availablecrypto.includes(args[0].toLowerCase()) && validoperation.includes(args[1].toLowerCase())) {
        coin(args[0].toLowerCase(), args[1].toLowerCase()).then(output => {
            saveToFile(filename, output);
        });
    }
}


