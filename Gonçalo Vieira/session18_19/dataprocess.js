import fs from 'fs';

/**
 * List of available cryptocurrencies for querying.
 * @type {Array<string>}
 */
export const availablecrypto = [
    "bitcoin",
    "ethereum",
    "litecoin",
    "ripple",
    "dogecoin",
    "cardano",
    "polkadot",
    "solana",
    "binancecoin",
    "shiba-inu",
    "chainlink",
    "stellar",
    "vechain",
    "tron",
    "uniswap"
];

/**
 * Mapping of valid information types for querying the API.
 * @type {Object<string, string>}
 */
export const validInfo = {
    marketcap: "marketCapUsd",
    price: "priceUsd",
    volume24hr: "volumeUsd24Hr",
    changepercent24hr: "changePercent24Hr",
    supply: "supply",
    maxsupply: "maxSupply"
};

/**
 * List of valid operations that can be performed on cryptocurrency data.
 * @type {Array<string>}
 */
export const validoperation = ["price", "variation", "supply", "about", "allabout"];

/**
 * Formats a number into a human-readable format with suffixes like T, B, M, K depending on the value.
 * @param {number} num - The number to be formatted.
 * @returns {string} The formatted number with the appropriate suffix.
 */
export function formatNumber(num) {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(2) + 'T'; 
    }
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B'; 
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    if (num <= 1e3 && num>= 1) {
        return parseFloat(num).toFixed(2);
    }
    if (num<1  && num>= 0.1)  {
        return parseFloat(num).toFixed(3);
    }
    if (num<0.1  && num>= 0.01)  {
        return parseFloat(num).toFixed(4);
    }
    if (num<0.1)  {
        return parseFloat(num).toFixed(6);
    }
}



/**
 * Performs a specific operation (like fetching price, variation, etc.) for a cryptocurrency.
 * @param {string} crypto - The cryptocurrency name or symbol.
 * @param {string} operation - The operation to be performed (price, variation, supply, about, allabout).
 * @returns {void}
 */
export function coin(crypto, operation) {
    let url = `https://api.coincap.io/v2/assets/${crypto}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.data) {
                console.error('❌ Error: Invalid data received.');
                return '❌ Error: Invalid data received.\n';
            }

            let result = "";
            function basicdata() {
                result += '───────────────────────────────────────────\n';
                result += `| 🔹 Symbol:        💰 ${data.data.symbol}\n`;
                result += `| 📌 Name:          📛 ${data.data.name}\n`;
            }

            if (operation === "price") {
                result += `\n🌟 📊 Current ${data.data.name} price 🌟\n`;
                basicdata();
                result += `| 💲 Current Price: 💵 ${formatNumber(data.data.priceUsd)}\n`;
            }

            if (operation === "variation") {
                result += `\n📊 🔄 24h Price Variation (${data.data.name}) 📊\n`;
                basicdata();
                result += `| 📈 24h Volume:   💲 ${formatNumber(data.data.volumeUsd24Hr)}\n`;
                result += `| 🔥 Change (24h): 📉 ${parseFloat(data.data.changePercent24Hr).toFixed(2)}%\n`;
            }

            if (operation === "supply") {
                result += `\n💰 📊 Supply & Market Cap (${data.data.name}) 💰\n`;
                basicdata();
                result += `| 💵 Market Cap:     💲 ${formatNumber(data.data.marketCapUsd)}\n`;
                result += `| 🏦 Current Supply: 🪙 ${formatNumber(data.data.supply)} ${data.data.symbol}\n`;
                result += `| 🚀 Max Supply:     🔝 ${formatNumber(data.data.maxSupply) || 'N/A'}\n`;
            }

            if (operation === "about") {
                result += `\nℹ️ 📄 General Information about ${data.data.name} ℹ️\n`;
                basicdata();
                result += `| 🏆 Rank:         🎖️ ${data.data.rank}\n`;
                result += `| 🆔 ID:           🏷️ ${data.data.id}\n`;
            }

            if (operation === "allabout") {
                result += `\n🌟 🔍 Full Details for ${data.data.name} 🌟\n`;
                basicdata();
                result += `| 💲 Current Price:  💵  ${formatNumber(data.data.priceUsd)}\n`;
                result += `| 📈 24h Volume:     💲  ${formatNumber(data.data.volumeUsd24Hr)}\n`;
                result += `| 🔥 Change (24h):   📉  ${parseFloat(data.data.changePercent24Hr).toFixed(2)}%\n`;
                result += `| 💵 Market Cap:     💲  ${formatNumber(data.data.marketCapUsd)}\n`;
                result += `| 🏦 Current Supply: 🪙  ${formatNumber(data.data.supply)} ${data.data.symbol}\n`;
                result += `| 🚀 Max Supply:     🔝  ${formatNumber(data.data.maxSupply) || 'N/A'}\n`;
                result += `| 🏆 Rank:           🎖️  ${data.data.rank}\n`;
                result += `| 🆔 ID:             🏷️ ${data.data.id}\n`;
            }

            result += '───────────────────────────────────────────\n';
            console.log(result);
            return result;
        })
        .catch(error => {
            console.error('❌ Error fetching data:', error);
            return `❌ Error fetching data: ${error}\n`;
        });
}


/**
 * Displays a table with information about multiple cryptocurrencies based on a specific data type (e.g., marketcap, price, etc.).
 * @param {string} info - The type of information to be displayed (marketcap, price, volume24hr, etc.).
 * @returns {void}
 */
export function all(info) {
    const url = "https://api.coincap.io/v2/assets";
    let cryptoList = [];
    let completedRequests = 0;
    let output = "";

    if (!validInfo[info]) {
        console.error("❌ Error: Invalid information type.");
        return "❌ Error: Invalid information type.\n";
    }

    return new Promise((resolve) => {
        availablecrypto.forEach(crypto => {
            fetch(`${url}/${crypto}`)
                .then(res => res.json())
                .then(data => {
                    if (data.data) {
                        cryptoList.push({
                            name: data.data.name,
                            symbol: data.data.symbol,
                            value: parseFloat(data.data[validInfo[info]]) || "N/A"
                        });
                    }
                })
                .catch(error => console.error(`Error fetching ${crypto}:`, error))
                .finally(() => {
                    completedRequests++;
                    if (completedRequests === availablecrypto.length) {
                        cryptoList.sort((a, b) => (b.value !== "N/A" ? b.value : 0) - (a.value !== "N/A" ? a.value : 0));

                        output += `\n🌟 🔍 Crypto ${info.toUpperCase()} Table 🌟\n`;
                        output += "─────────────────────────────────────────────────────────────\n";
                        output += `|    Name       |   Symbol   |      ${info.toUpperCase().padEnd(18)}      |\n`;
                        output += "─────────────────────────────────────────────────────────────\n";

                        cryptoList.forEach(data => {
                            output += `| ${data.name.padEnd(13)} | ${data.symbol.padEnd(10)} | ${formatNumber(data.value).padEnd(28)} |\n`;
                        });

                        output += "─────────────────────────────────────────────────────────────\n";
                        console.log(output);
                        resolve(output);
                    }
                });
        });
    });
}


/**
 * Saves the output of a command to a text file.
 * @param {string} filename - The name of the file.
 * @param {string} content - The content to be saved.
 */
export function saveToFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error("❌ Error saving file:", err);
        } else {
            console.log(`✅ Output successfully saved to ${filename}`);
        }
    });
}
