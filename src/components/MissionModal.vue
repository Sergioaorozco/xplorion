<template>
  <section class="modal-container z-40 w-full h-full">
    <article class="modal-content">
      <figure class="px-20 py-14 modal-bg relative aspect-video size w-[900px] h-[500px]">
        <button class="modal-close-button absolute top-6 right-10" @click="$emit('close-modal')">Cerrar</button>
        <div class="flex gap-x-2 justify-between">
          <span class="w-2/5">
            <h1 class="text-lg font-bold text-lime-700 tracking-wide uppercase">you have discovered an Attraction</h1>
            <h2 class="text-5xl my-4">The cave of Kokkalis</h2>
            <p class="text-pretty basis-text">During the Second World War, the republican army built a cave in Mount Vrontero to make it a hospital for the wounded. It got it’s name from doctor Petros Kokkalis.</p>
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

<style scoped>
.modal-container { cursor: url('../assets/images/cursors/default.png'), auto; }
.modal-close-button:hover { cursor: url('../assets/images/cursors/pointer.png'), auto; }
.modal-bg {
  background-image: url('../assets/images/modal-bg-small-front.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.basis-text {
  font-family: 'Basis_Grotesque', sans-serif;
}
</style>