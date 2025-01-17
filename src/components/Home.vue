<template>
  <section class="w-screen h-screen relative flex justify-center items-center">
    <img src="/images/home-screen-poster.webp" class="w-full h-full absolute" alt="">
    <div class="absolute flex gap-y-8 flex-col justify-center items-center">
      <h1 class="title-fontface text-9xl">Xplorion</h1>
      <MButton :loading="isLoading" @click="startGame" >Start Game</MButton>
    </div>
  </section>
</template>
<script setup>
  import {ref} from 'vue';
  import { useRouter } from 'vue-router';
  import MButton from './MButton.vue';
  import PButton from 'primevue/button';
  import mapIllustration from '/images/scenery-BG.webp';
  import { preloadImage } from '../composables/fetchingFunction';

  const router = useRouter();
  let isLoading = ref(false);
  const startGame = async () => {
  try {
    isLoading.value = true;
    preloadImage(mapIllustration);
    await router.push({ name: 'startGame' });
  } catch (err) {
    console.error('Image failed to load:', err);
  } finally {
    isLoading.value = false;
  }
}

</script>

<style scoped>
</style>
