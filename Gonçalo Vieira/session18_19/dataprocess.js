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

const currency = "USD";




function formatNumber(num) {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(2) + 'T'; // Trilhões
    }
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B'; // Bilhões
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M'; // Milhões
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K'; // Milhares
    }
    if (num <= 1e3) {
        return num.toFixed(2);
    }
}

export function price(crypto) {
    let url = `https://api.coincap.io/v2/assets/${crypto}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
   
            console.log("Symbol: ",data.data.symbol)
            console.log("Name: ", data.data.name);
            console.log(`Preço atual (${currency}) :`, formatNumber(data.data.priceUsd));
            
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });

}


export function variation(crypto) {
    let url = `https://api.coincap.io/v2/assets/${crypto}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {


            console.log("Symbol: ",data.data.symbol)
            console.log("Name: ", data.data.name);
            console.log(`Volume de 24h (${currency}) :`, formatNumber(data.data.volumeUsd24Hr));
            console.log("Alteração nas últimas 24h :",  parseFloat(data.data.changePercent24Hr).toFixed(2),"%");
            
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });

}

export function supply(crypto) {
    let url = `https://api.coincap.io/v2/assets/${crypto}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
           

            console.log("Symbol: ",data.data.symbol)
            console.log("Name: ", data.data.name);
            console.log(`Marketcap (${currency}) :`, formatNumber(data.data.marketCapUsd));
            console.log("Suply atual:", parseFloat(data.data.supply).toFixed(2));
            console.log("Max Suply:", parseFloat(data.data.maxSupply).toFixed(2)); 

            
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });

}

export function about(crypto) {
    let url = `https://api.coincap.io/v2/assets/${crypto}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            console.log("Symbol: ",data.data.symbol)
            console.log("Name: ", data.data.name);
            console.log("Rank:", data.data.rank);
            console.log("ID:", data.data.id);
            
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });

}

export function all(crypto) {
    let url = `https://api.coincap.io/v2/assets/${crypto}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log("Symbol: ",data.data.symbol)
            console.log("Name: ", data.data.name);
            console.log(`Preço atual (${currency}) :`, formatNumber(data.data.priceUsd));
            console.log(`Volume de 24h (${currency}) :`, formatNumber(data.data.volumeUsd24Hr));
            console.log("Alteração nas últimas 24h :",  parseFloat(data.data.changePercent24Hr).toFixed(2),"%");
            console.log(`Marketcap (${currency}) :`, formatNumber(data.data.marketCapUsd));
            console.log("Suply atual:", (data.data.supply));
            console.log("Max Suply:", (data.data.maxSupply));
            console.log("Rank:", data.data.rank);
            console.log("ID:", data.data.id);


 
            
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });

}

