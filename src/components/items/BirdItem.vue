<script setup lang="ts">
const testAnimal = () => {
  console.log('Animal clicked');
}
</script>

<template>
  <article @click="testAnimal" class="map-item-container z-10">
    <figure class="map-item">
      <img class="absolute top-[1200px] left-[1500px]" src="/src/images/animal.svg" alt="bird item in the map" />
    </figure>
  </article>
</template>

<style scoped>
.map-item:hover { cursor: url('/src/images/watch.png'), auto; }
</style>
