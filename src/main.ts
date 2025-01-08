import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createMemoryHistory, createRouter } from 'vue-router';
import './style.css';

import App from './App.vue';


const routes = [
  {
    name: 'startGame',
    path: '/start',
    component: () => import('./components/MapContainer.vue'),
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('./components/Home.vue'),
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
