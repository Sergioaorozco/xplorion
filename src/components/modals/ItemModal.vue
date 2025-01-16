<template>
<MissionModal
@close-modal="closeModal"
v-if="isVisible">
<template #itemFound>
  <div class="flex gap-x-10 justify-between h-full">
    <span class="w-2/5">
      <h1 class="text-lg font-bold text-lime-700 tracking-wide uppercase">{{ modalInfo.wKey }}</h1>
      <h2 class="text-5xl my-4">{{modalInfo.title}}</h2>
      <p class="text-pretty basis-text font-light text-lg"> {{ modalInfo.description }}</p>
    </span>
    <figure class="relative w-3/5 flex justify-center items-center h-full">
      <img class="absolute" width="400" src="/images/card-back.svg" alt="">
      <img class="absolute" width="400" src="/images/cave-of-kokkalis.webp" alt="">
    </figure>
  </div>
</template>
<template #footer>
  <div class="self-start flex gap-x-3">
    <p class="bg-white rounded-lg px-3 py-1 w-fit">{{  modalInfo.type === TYPES.ANIMAL ? gameStore.countAnimals : gameStore.countPlaces }}</p>
    <button class="bg-white rounded-lg px-3 py-1 hover:bg-stone-400 transition-colors duration-200" @click="goToList">See the List</button>
  </div>
</template>
</MissionModal>
</template>

<script setup>
  import {ref} from 'vue';
  import { useGameStore } from '../../stores/GameStore';
  import MissionModal from '../MissionModal.vue';

  const gameStore = useGameStore();
  const TYPES = { ANIMAL: 'animal', PLACE: 'place' }
  const emit = defineEmits(['toggleModal', 'redirectList']);

  // Props
  const props = defineProps({
    modalInfo: Object,
    isVisible: Boolean
  })

  // Methods
  const closeModal = () => emit('toggleModal', false);
  const goToList = () => emit('redirectList', props.modalInfo.type );
</script>

