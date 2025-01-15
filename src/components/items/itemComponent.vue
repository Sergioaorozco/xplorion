<script setup lang="ts">
const emit = defineEmits(['check-item']);
import { onMounted, ref } from 'vue';
import { useGameStore } from '../../stores/GameStore';
import type { ModalInterface } from '../../interfaces/ModalInterface';


const gameStore = useGameStore();

const props = defineProps({
  xPosition: {
    type: Number,
    required: true
  },
  yPosition: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

let itemInfo = ref<Partial<ModalInterface>>({});

onMounted(()=> {
  const item = gameStore.getItemById(props.id);
  if (item) itemInfo.value = item
})


const isItemFound = () => {
  emit('check-item', itemInfo.value);
}
</script>

<template>
  <article
    @click="isItemFound"
    class="map-item-container absolute z-10"
    :style = "{ top: yPosition + 'px', left: xPosition + 'px' }"
  >
    <figure class="map-item">
      <img class="" :src="itemInfo.img" :alt="`${itemInfo.title} image found in the map`" />
    </figure>
  </article>
</template>


