<template>
  <section class="w-screen h-screen relative flex justify-center items-center">
    <img src="../assets/images/home-screen-poster.webp" class="w-full h-full absolute" alt="">
    <div class="absolute flex flex-col justify-center items-center">
      <h1 class="title-fontface text-9xl">Xploffee</h1>
      <!-- <h1 class="title-fontface text-9xl">Kapuf</h1> -->
      <router-link class="start-button mt-4" :to="{name:'startGame'}">Start Game</router-link>
    </div>
  </section>
</template>

<style scoped>
</style>