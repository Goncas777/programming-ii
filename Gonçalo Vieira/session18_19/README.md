# 🚀 Crypto CLI - Quick Cryptocurrency Lookup 💰

Welcome to **Crypto CLI**, a **Node.js** project that allows you to fetch cryptocurrency data directly from the terminal!  
With this program, you can retrieve prices, 24h variations, supply details, and much more.  

---

## 📌 How It Works?

This project uses the [CoinCap](https://coincap.io/) API to fetch cryptocurrency data and display it in a structured format in the terminal.  

### 📜 Main Features:
- 📊 **Check the current price** of a cryptocurrency.
- 🔄 **View the 24h price variation**.
- 🏦 **Get supply and market cap details**.
- 📑 **View a complete summary** of a selected cryptocurrency.
- 🌍 **Display a table with key details** of multiple cryptocurrencies.

---

## 🔧 Installation

1️⃣ Clone this repository:
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

2️⃣ Install dependencies:
```bash
npm install
```

3️⃣ **Run the program** using the following commands:
```bash
node index.js <crypto> <operation>
```
Example:
```bash
node index.js bitcoin price
```

---

## 🛠️ Project Structure

📂 **session18_19/**  
├── 📜 dataprocess.js  
├── 📜 index.js  
├── 📜 info.js  
├── 📜 main.test.js  
├── 📜 package.json  
└── 📜 README.md  

---

## 📌 File Descriptions

### 📜 dataprocess.js
Contains the core functions for fetching and formatting cryptocurrency data.  

**Key functions:**  
🔹 `formatNumber(num)` → Formats large numbers with suffixes like K, M, B.  
🔹 `coin(crypto, operation)` → Retrieves detailed information about a cryptocurrency.  
🔹 `all(info)` → Displays a table of multiple cryptocurrencies based on a specific data type.  

---

### 📜 index.js
Handles user arguments and executes the appropriate functions.  

Example of valid commands:  
```bash
node index.js ethereum price
node index.js all marketcap
```

---

### 📜 info.js
Contains the function `allcommands()`, which displays a menu with available commands.  

---

### 📜 main.test.js
Automated tests using Node.js testing libraries.  

To run the tests:  
```bash
node main.test.js
```

---

## 🎯 Usage Examples

📢 **Get the price of Bitcoin**  
```bash
node index.js bitcoin price
```
📢 **Get Ethereum's 24h transaction volume**  
```bash
node index.js ethereum variation
```
📢 **List all supported cryptocurrencies**  
```bash
node index.js available cryptos
```
📢 **Retrieve ranking and ID of a cryptocurrency**  
```bash
node index.js cardano about
```

---

## 🧪 Testing

The project includes automated tests to verify correct number formatting.  

To run the tests, execute the following command:  
```bash
node main.test.js
```

If all tests pass, you’ll see:  
✔ **All tests passed! ✅**

---

## 📜 License
This project is licensed under MIT.  

Made with ❤️ by [Gonçalo Vieira]. 🚀
