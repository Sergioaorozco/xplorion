<template>
  <MobileScreen v-if="isMobile" />
  <RouterView v-else />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MobileScreen from './components/MobileScreen.vue';
let isMobile = ref(window.innerWidth < 768);

onMounted(() => {
  window.addEventListener('resize', () => isMobile.value = window.innerWidth < 768);
})

onUnmounted(() => {
  window.removeEventListener('resize', () => isMobile.value = window.innerWidth < 768)
})
</script>