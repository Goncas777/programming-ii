export async function convertUSDToEUR(amount) {  
    const rate = await fetchExchangeRate(); // Assume this calls an API  
    return amount * rate;  
  }


async function fetchExchangeRate(){
    return 1;
}
