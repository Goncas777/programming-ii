const fs = require('fs');
const API_KEY = '3c40f541b845a68707a107c94ae1436b';
const City = ['London', 'Paris', 'Tokyo'];

async function fetchUser(city) {
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        if (!weather.ok) throw new Error('Failed to fetch');
        const data = await weather.json();

        return {
            city: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity
        };
    } catch (error) {
        console.error(error.message);
    }
}

async function fetchWeather() {  
    const cities = City;
    const promises = cities.map(city => fetchUser(city));  
    const weatherData = await Promise.all(promises);  
    console.log(weatherData);

    fs.writeFileSync('weather.json', JSON.stringify(weatherData, null, 2), 'utf8');
    console.log('Dados salvos em weather.json');
}

fetchWeather();





/*const fs = require('fs');
const API_KEY = '3c40f541b845a68707a107c94ae1436b'; // Replace with a valid key  
const City = ['London', 'Paris', 'Tokyo'];


async function fetchUser(id) {
    try {
        const weather = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${API_KEY})
        if (!weather.ok) throw new Error('Failed to fetch');
        return await weather.json();
    } catch (error) {
        console.error(error.message);
    }

}

async function fetchUsers() {  
    const ids = [1, 2, 3];  
    const promises = ids.map(id => fetchUser(id));  
    const users = await Promise.all(promises);
    fs.writeFileSync('weather.json', JSON.stringify(users,null,2));
    console.log(users);  
  }



fetchUser();
fetchUsers();
*/


