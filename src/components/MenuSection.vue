<template>
  <MissionListModal v-if="props.isVisible" @close-modal="$emit('checkModal', false)">
    <template v-slot:itemList>
      <div>
        <h2 class="text-5xl text-center">List of Items</h2>
        <ul class="flex justify-center flex-wrap px-14 gap-2 mt-8">
          <li v-for="item in gameStore.userFindObjects"
            :class="['text-center size-36 flex rounded-md justify-center items-center bg-stone-50/50 p-6 border-4 border-stone-300 hover:-translate-y-1 transition-transform duration-200', !item.found && 'grayscale']">
            <img width="100" height="50" :src="item.img" alt="">
          </li>
        </ul>
      </div>
    </template>
    <template #footer>
      <p class="bg-white rounded-lg px-3 py-1 w-fit">{{ gameStore.countItems }}</p>
    </template>
  </MissionListModal>
  <section>
    <article class="absolute top-2 flex justify-between items-center w-full z-30 px-6">
      <p class="title-fontface text-4xl custom-hover-pointer">Xplorion</p>
      <ul class="flex items-center gap-x-5">
        <li @click="$emit('checkModal', true)"
          :class="['size-24 p-3 border-white border-8 flex justify-center items-center', isCompleted ? 'bg-lime-300 text-lime-500 hover:text-lime-700 hover:bg-lime-400' : 'bg-stone-300 text-stone-500 hover:text-stone-700 hover:bg-stone-200']">
          <IconAccessible  class="size-full" />
        </li>
        <li @click="$emit('checkModal', true)"
          :class="['size-24 p-3 border-white border-8 flex justify-center items-center', isCompleted ? 'bg-lime-300 text-lime-500 hover:text-lime-700 hover:bg-lime-400' : 'bg-stone-300 text-stone-500 hover:text-stone-700 hover:bg-stone-200']">
          <IconBuildingPavilion   class="size-full" />
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
import { IconAccessible, IconBuildingPavilion } from '@tabler/icons-vue';

// Props
const props = defineProps({
  isVisible: ({ type: Boolean, default: false })
})

const emit = defineEmits(['checkModal'])

// Components and Stores
import MissionListModal from '../components/MissionModal.vue';
const gameStore = useGameStore();

// Computed Properties
let isCompleted = computed(() => gameStore.completionNotification);


</script>