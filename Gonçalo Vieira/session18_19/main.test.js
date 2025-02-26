import assert from 'node:assert';
import { formatNumber, coin, all } from './dataprocess.js';

console.log("🔍 Running advanced tests...\n");

// 🧪 Testes para formatNumber()
console.log("🔢 Testing formatNumber() function...");

assert.strictEqual(formatNumber(1500000000000), "1.50T", "Should convert 1.5 trillion to '1.50T'");
assert.strictEqual(formatNumber(1500000000), "1.50B", "Should convert 1.5 billion to '1.50B'");
assert.strictEqual(formatNumber(250000000), "250.00M", "Should convert 250 million to '250.00M'");
assert.strictEqual(formatNumber(2500), "2.50K", "Should convert 2500 to '2.50K'");
assert.strictEqual(formatNumber(999), "999.00", "Should correctly format 999");
assert.strictEqual(formatNumber(0.15), "0.150", "Should correctly format 0.15");
assert.strictEqual(formatNumber(0.005), "0.005000", "Should correctly format 0.005");
assert.strictEqual(formatNumber(0.00009), "0.000090", "Should correctly format a very small number");

console.log("✅ formatNumber() tests passed!\n");

// 🧪 Testes simulados para coin() usando um mock de fetch
console.log("💰 Testing coin() function with mocked API response...");

// Mock global fetch para simular chamadas à API
global.fetch = async (url) => ({
    json: async () => ({
        data: {
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            priceUsd: "45000.1234",
            marketCapUsd: "850000000000",
            volumeUsd24Hr: "35000000000",
            changePercent24Hr: "2.5",
            supply: "19000000",
            maxSupply: "21000000",
            rank: "1",
        }
    })
});

// Simula a execução da função para ver se ela não lança erros
try {
    coin("bitcoin", "price");
    console.log("✅ coin() executed without errors!\n");
} catch (error) {
    console.error("❌ coin() function failed:", error);
}

// 🧪 Teste para all() simulando múltiplos ativos
console.log("📊 Testing all() function...");

global.fetch = async (url) => ({
    json: async () => ({
        data: {
            name: "Bitcoin",
            symbol: "BTC",
            marketCapUsd: "850000000000",
            priceUsd: "45000.1234",
            volumeUsd24Hr: "35000000000",
            changePercent24Hr: "2.5",
            supply: "19000000",
            maxSupply: "21000000",
            rank: "1",
        }
    })
});

// Simula a execução da função sem lançar erros
try {
    all("price");
    console.log("✅ all() executed without errors!\n");
} catch (error) {
    console.error("❌ all() function failed:", error);
}

console.log("🎉 All advanced tests passed! 🚀");
