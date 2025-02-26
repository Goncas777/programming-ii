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

export const validInfo = {
    marketcap: "marketCapUsd",
    price: "priceUsd",
    volume24hr: "volumeUsd24Hr",
    changepercent24hr: "changePercent24Hr",
    supply: "supply",
    maxsupply: "maxSupply"
};

export const validoperation = ["price","variation","supply","about","allabout"]


function formatNumber(num) {
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

export function coin(crypto,operation) {
    let url = `https://api.coincap.io/v2/assets/${crypto}`;

    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.data) {
                console.error('❌ Erro: dados inválidos recebidos.');
                return;
            }
            function basicdata() {
                console.log('───────────────────────────────────────────');
                console.log(`| 🔹 Symbol:        💰 ${data.data.symbol}`);
                console.log(`| 📌 Name:          📛 ${data.data.name}`);
            }


            if(operation === "price"){
                console.log(`\n🌟 📊 Current ${data.data.name} price🌟`);
                basicdata();
                console.log(`| 💲 Current Price: 💵 ${formatNumber(data.data.priceUsd)}`);
            }

            if(operation === "variation"){
                console.log(`\n📊 🔄 24h Price Variation (${data.data.name}) 📊`);
                basicdata();
                console.log(`| 📈 24h Volume:   💲 ${formatNumber(data.data.volumeUsd24Hr)}`);
                console.log(`| 🔥 Change (24h): 📉 ${parseFloat(data.data.changePercent24Hr).toFixed(2)}%`);
            }

            if(operation === "supply"){
                onsole.log(`\n💰 📊 Supply & Market Cap (${data.data.name}) 💰`);
                basicdata();
                console.log(`| 💵 Market Cap:     💲 ${formatNumber(data.data.marketCapUsd)}`);
                console.log(`| 🏦 Current Supply: 🪙 ${formatNumber(data.data.supply)} ${data.data.symbol}`);
                console.log(`| 🚀 Max Supply:     🔝 ${formatNumber(data.data.maxSupply) || 'N/A'}`);
            }

            if(operation === "about"){
                console.log(`\nℹ️ 📄 General Information about ${data.data.name} ℹ️`);
                basicdata();
                console.log(`| 🏆 Rank:         🎖️ ${data.data.rank}`);
                console.log(`| 🆔 ID:           🏷️ ${data.data.id}`);
            }

            if(operation === "allabout"){
                console.log(`\n🌟 🔍 Full Details for ${data.data.name} 🌟`);
                basicdata();
                console.log(`| 💲 Current Price:  💵  ${formatNumber(data.data.priceUsd)}`);
                console.log(`| 📈 24h Volume:     💲  ${formatNumber(data.data.volumeUsd24Hr)}`);
                console.log(`| 🔥 Change (24h):   📉  ${parseFloat(data.data.changePercent24Hr).toFixed(2)}%`);
                console.log(`| 💵 Market Cap:     💲  ${formatNumber(data.data.marketCapUsd)}`);
                console.log(`| 🏦 Current Supply: 🪙  ${formatNumber(data.data.supply)} ${data.data.symbol}`);
                console.log(`| 🚀 Max Supply:     🔝  ${formatNumber(data.data.maxSupply) || 'N/A'}`);
                console.log(`| 🏆 Rank:           🎖️  ${data.data.rank}`);
                console.log(`| 🆔 ID:             🏷️  ${data.data.id}`);
            }
            console.log('───────────────────────────────────────────\n');
        })
        .catch(error => {
            console.error('❌ Erro ao obter dados:', error);
        });
}

export function all(info) {
    const url = "https://api.coincap.io/v2/assets";
    let cryptoList = [];
    let completedRequests = 0;

    if (!validInfo[info]) {
        console.error("❌ Erro: Informação inválida. Escolha entre: marketcap, price, volume24hr, changepercent24hr, supply, maxsupply.");
        return;
    }

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
            .catch(error => console.error(`Erro ao buscar ${crypto}:`, error))
            .finally(() => {
                completedRequests++;
                if (completedRequests === availablecrypto.length) {
                    cryptoList.sort((a, b) => (b.value !== "N/A" ? b.value : 0) - (a.value !== "N/A" ? a.value : 0));

                    console.log(`\n🌟 🔍 Crypto ${info.toUpperCase()} Table 🌟`);
                    console.log("──────────────────────────────────────────────────────────");
                    console.log(`|    Name       |   Symbol   |      ${info.toUpperCase().padEnd(9)}      |`);
                    console.log("──────────────────────────────────────────────────────────");

                    cryptoList.forEach(data => {
                        console.log(`| ${data.name.padEnd(13)} | ${data.symbol.padEnd(10)} | ${formatNumber(data.value).padEnd(19)} |`);
                    });

                    console.log("──────────────────────────────────────────────────────────\n");
                }
            });
    });
}
