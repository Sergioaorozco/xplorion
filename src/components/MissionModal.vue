<template>
  <section class="modal-container z-40 w-full h-full">
    <article class="modal-content">
      <figure class="px-20 py-14 modal-bg relative aspect-video size w-[900px] h-[500px]">
        <button class="modal-close-button absolute top-6 right-10" @click="$emit('close-modal')">Cerrar</button>
        <div class="flex gap-x-2 justify-between">
          <span class="w-2/5">
            <h1 class="text-lg font-bold text-lime-700 tracking-wide uppercase">{{ props.WKey }}</h1>
            <h2 class="text-5xl my-4">{{props.title}}</h2>
            <p class="text-pretty basis-text"> {{ props.description }}</p>
            <button class="mt-9">See the List</button>
          </span>
          <figure class="relative w-[400px] h-[300px]">
            <img class="absolute" src="../assets/images/card-back.svg" alt="">
            <img class="absolute" src="../assets/images/cave-of-kokkalis.webp" alt="">
          </figure>
        </div>
      </figure>
    </article>
    <div class="modal-overlay"></div>
  </section>
  
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  WKey: String,
  description: String,
})

</script>

<style scoped>
@import 'src/animations.css';

.modal-container {
  cursor: url('../assets/images/cursors/default.png'), auto;
}
.modal-close-button:hover { cursor: url('../assets/images/cursors/pointer.png'), auto; }
.modal-bg {
  background-image: url('../assets/images/modal-bg-small-front.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.modal-content {
  animation-name: fade;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
}

.basis-text {
  font-family: 'Basis_Grotesque', sans-serif;
}
</style>