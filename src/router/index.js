// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import WeatherWidget from '../components/WeatherWidget.vue';
import Tugas from '../components/Tugas.vue'; // Import komponen Tugas.vue

const routes = [
  {
    path: '/',
    redirect: '/weather', // Mengarahkan root path ke rute WeatherWidget
  },
  {
    path: '/weather',
    name: 'WeatherWidget',
    component: WeatherWidget,
  },
  {
    path: '/tugas',
    name: 'Tugas', // Nama rute untuk menuju komponen Tugas.vue
    component: Tugas, // Tautkan dengan komponen Tugas.vue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
