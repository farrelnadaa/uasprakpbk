<template>
    <div class="weather-widget">
      <input v-model="city" @keyup.enter="fetchWeather" placeholder="Enter city name" />
      <button @click="fetchWeather">Get Weather</button>
  
      <div v-if="weather" class="weather-info">
        <h2>Weather in {{ weather.name }}</h2>
        <div class="weather-description">
          <img :src="getWeatherIcon(weather.weather[0].icon)" :alt="weather.weather[0].description" />
          <p>{{ weather.weather[0].description }}</p>
        </div>
        <p class="temperature">Temperature: {{ weather.main.temp }} °C</p>
      </div>
  
      <div v-else-if="loading" class="loading">
        <p>Loading...</p>
      </div>
  
      <div v-else class="placeholder">
        <p>Enter a city name and click "Get Weather" to see the weather.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  const city = ref('');
  const weather = ref(null);
  const loading = ref(false);
  const apiKey = '34b0d6f7dde97a1aad312f7e6257e5ef'; // Ganti dengan API key Anda dari OpenWeatherMap
  
  const fetchWeather = async () => {
    try {
      loading.value = true;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`
      );
      weather.value = response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      loading.value = false;
    }
  };
  
  const getWeatherIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}.png`;
  };
  </script>
  
  <style scoped>
  .weather-widget {
    padding: 20px;
    background-color: #f0f0f0;
    background-image: url('src/assets/latar1.jpg'); /* Ganti dengan URL gambar latar belakang Anda */
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    text-align: center;
    max-width: 300px;
    margin: 20px auto;
  }
  
  input {
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: #313431;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #3d413d;
  }
  
  .weather-info {
    margin-top: 20px;
  }
  
  .weather-description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .weather-description img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .temperature {
    font-size: 1.2rem;
    margin-top: 10px;
  }
  
  .loading {
    margin-top: 20px;
  }
  
  .placeholder {
    margin-top: 20px;
    color: #777;
  }
  
  @media (min-width: 768px) {
    .weather-widget {
      max-width: 400px;
    }
  }
  </style>
  