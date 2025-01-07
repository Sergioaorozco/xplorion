<template>
  <section class="modal-container z-40 w-full h-full">
    <div class="modal-content">
      <figure class="modal-bg relative aspect-video size w-[800px] h-[600px]">
        <button class="modal-close-button absolute top-20 right-6" @click="$emit('close-modal')">Cerrar</button>
      </figure>
    </div>
    <div class="modal-overlay"></div>
  </section>
  
</template>

<style scoped>
.modal-container { cursor: url('../images/default.png'), auto; }
.modal-close-button:hover { cursor: url('../images/pointer.png'), auto; }
.modal-bg {
  background-image: url('../images/modal-bg-small-front.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>