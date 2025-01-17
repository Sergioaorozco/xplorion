import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createWebHistory, createRouter } from 'vue-router';
import PrimeVue from 'primevue/config';
import App from './App.vue';

// Styles
import './style.css';

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

app.use(PrimeVue, {
  theme: {
      darkModeSelector: '.my-app-dark',
  }
});

app.use(createPinia());
app.use(router);
app.mount('#app');
