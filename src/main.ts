import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createWebHistory, createRouter } from 'vue-router';
import './style.css';

import App from './App.vue';


const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('./components/Home.vue'),
  },
  {
    name: 'startGame',
    path: '/start',
    component: () => import('./components/MapContainer.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
