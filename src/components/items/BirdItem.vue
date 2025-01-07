<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['check-item']);
defineProps({
  xPosition: {
    type: Number,
    required: true
  },
  yPosition: {
    type: Number,
    required: true
  },
  taxonomy: {
    type: String,
    required: true
  }
})

const testAnimal = () => {
  emit('check-item', { taxonomy });
}
</script>

<template>
  <article
    @click="testAnimal"
    class="map-item-container absolute z-10"
    :style = "{ top: yPosition + 'px', left: xPosition + 'px' }"
  >
    <figure class="map-item">
      <img class="" src="/src/images/animal.svg" alt="bird item in the map" />
    </figure>
  </article>
</template>


<style scoped>
.map-item:hover { cursor: url('/src/images/watch.png'), auto; }
</style>
