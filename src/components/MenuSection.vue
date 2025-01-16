<template>
  <MissionListModal v-if="props.isVisible" @close-modal="$emit('toggleModal', {modalType:props.type, modalValue: false})">
    <template v-slot:itemList>
      <div>
        <h2 class="text-5xl text-center">{{ getContentbyType.title }}</h2>
        <ul class="flex justify-center flex-wrap px-14 gap-2 mt-8">
          <li v-for="item in getContentbyType.info"
            :class="['text-center size-36 flex rounded-md justify-center items-center bg-stone-50/50 p-6 border-4 border-stone-300 hover:-translate-y-1 transition-transform duration-200', !item.found && 'grayscale']">
            <img :onerror="getContentbyType.defaultImage" width="100" height="50" :src="item.img" :alt="`${item.title} image in the map`">
          </li>
        </ul>
      </div>
    </template>
    <template #footer>
      <p class="bg-white rounded-lg px-3 py-1 w-fit">{{ getContentbyType.count }}</p>
    </template>
  </MissionListModal>
  <section>
    <article class="absolute top-2 flex justify-between items-center w-full z-30 px-6">
      <p class="title-fontface text-4xl custom-hover-pointer">Xplorion</p>
      <ul class="flex items-center gap-x-5">
        <li @click="$emit('toggleModal', {modalType:TYPES.ANIMAL, modalValue: true})"
          :class="['size-24 p-3 border-white border-8 flex justify-center items-center', isAnimalsCompleted ? 'bg-lime-300 text-lime-500 hover:text-lime-700 hover:bg-lime-400' : 'bg-stone-300 text-stone-500 hover:text-stone-700 hover:bg-stone-200']">
          <IconPawFilled class="size-full" />
        </li>
        <li @click="$emit('toggleModal', {modalType:TYPES.PLACE, modalValue: true})"
          :class="['size-24 p-3 border-white border-8 flex justify-center items-center', isPlacesCompleted ? 'bg-lime-300 text-lime-500 hover:text-lime-700 hover:bg-lime-400' : 'bg-stone-300 text-stone-500 hover:text-stone-700 hover:bg-stone-200']">
          <IconMapPinFilled class="size-full" />
        </li>
      </ul>
      <div class="flex gap-x-5">
        <button class="title-fontface text-4xl custom-hover-pointer">Credits</button>
        <button class="title-fontface text-4xl custom-hover-pointer">Help</button>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../stores/GameStore';
import { IconPawFilled , IconMapPinFilled } from '@tabler/icons-vue';

const TYPES = { ANIMAL: 'animal', PLACE: 'place' }

// Props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
    required: true
  },
  type: {
    type: String,
    default: 'animal'
  },
})

const emit = defineEmits(['toggleModal'])

// Components and Stores
import MissionListModal from '../components/MissionModal.vue';
const gameStore = useGameStore();

// Computed Properties
let isAnimalsCompleted = computed(() => gameStore.isAnimalsCompleted);
let isPlacesCompleted = computed(() => gameStore.isPlacesCompleted);
let getContentbyType = computed(() => ({
  info: props.type === TYPES.ANIMAL ? gameStore.userFindAnimals : gameStore.userFindPlaces,
  count: props.type === TYPES.PLACE ? gameStore.countAnimals : gameStore.countPlaces,
  title: props.type === TYPES.ANIMAL ? 'List of Animals' : 'List of Places',
  defaultImage: props.type === TYPES.ANIMAL ? "this.src='/images/items/Bird.svg'" : "this.src='/images/items/Lion.svg'"
}))

</script>