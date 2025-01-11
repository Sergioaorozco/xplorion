<template>
  <MissionListModal v-if="showItemListModal" @close-modal="showItemListModal = false">
    <template v-slot:itemList >
      <h2 class="text-5xl text-center">List of Items</h2>
      <p>{{  countItems }}</p>
    </template>
  </MissionListModal>
  <section>
    <article class="absolute top-2 flex justify-between items-center w-full z-30 px-6">
      <p class="title-fontface text-4xl custom-pointer">Xplorion</p>
      <ul class="flex items-center gap-x-5">
        <li @click="showItemListModal = true" :class="['size-24 border-white border-8 flex justify-center items-center', isCompleted ? 'bg-lime-500' : 'bg-stone-300']">Objects</li>
        <li :class="['size-24 border-white border-8 bg-stone-300']"></li>
        <li :class="['size-24 border-white border-8 bg-stone-300']"></li>
      </ul>
      <div class="flex gap-x-5">
        <button class="title-fontface text-4xl custom-pointer">Credits</button>
        <button class="title-fontface text-4xl custom-pointer">Help</button>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from '../stores/GameStore';

// Components and Stores
import MissionListModal from '../components/MissionModal.vue';
const gameStore = useGameStore();

// Reactive References
let showItemListModal = ref(false);

// Computed Properties
let isCompleted = computed(() => gameStore.completionNotification);
let countItems = computed(() => {
  const foundItems = gameStore.userFindObjects.filter((item) => item.found);
  return `${foundItems.length} / ${gameStore.userFindObjects.length}`;
});


</script>