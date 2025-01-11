<template>
  <section class="modal-container z-40 w-full h-full">
    <article class="modal-content">
      <figure class="px-20 py-14 modal-bg relative aspect-video size w-[900px] h-[500px]">
        <button class="modal-close-button absolute top-6 right-10" @click="$emit('close-modal')">Cerrar</button>
        <slot name="itemFound"></slot>
        <slot name="itemList"></slot>
      </figure>
    </article>
    <div class="modal-overlay"></div>
  </section>
  
</template>


<style scoped>
@import '../animations.css';

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