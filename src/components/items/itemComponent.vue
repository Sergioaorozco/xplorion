<script setup lang="ts">
const emit = defineEmits(['check-item']);
import { onMounted, computed, ref } from 'vue';
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

let getDeaultIMG = computed(() => itemInfo.value.type === gameStore.TYPES.ANIMAL ? "this.src='/images/items/Bird.svg'" : "this.src='/images/items/Lion.svg'")


const isItemFound = () => {
  emit('check-item', itemInfo.value);
}
</script>

<template>
  <article
    @click="isItemFound"
    class="map-item-container absolute z-10"
    :style = "{ top: yPosition + '%', left: xPosition + '%' }"
  >
    <figure class="map-item">
      <img :onerror="getDeaultIMG" :src="itemInfo.img" :alt="`${itemInfo.title} image found in the map`" />
    </figure>
  </article>
</template>


