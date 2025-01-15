<template>
  <section class="modal-container z-40 w-full h-full">
    <article class="modal-content">
      <figure class="px-16 py-8 modal-bg relative aspect-video size w-[900px] h-[500px] flex flex-col justify-between">
        <button class="modal-close-button self-end size-10 text-stone-500 hover:text-stone-800 transition-colors duration-200" @click="$emit('close-modal')">
          <IconSquareRoundedXFilled  class="size-full" />
        </button>
        <slot name="itemFound"></slot>
        <slot name="itemList"></slot>
        <slot name="footer"></slot>
      </figure>
    </article>
    <div class="modal-overlay"></div>
  </section>
  
</template>
<script setup lang="ts">
import { IconSquareRoundedXFilled } from '@tabler/icons-vue';
</script>


<style scoped>
@import '../styles/animations.css';
@import '../styles/cursors.css';

.modal-container {
  cursor: var(--default-cursor);
}
.modal-close-button:hover { cursor: var(--pointer-cursor);  }
.modal-bg {
  background-image: url('/images/modal-bg-small-front.png');
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