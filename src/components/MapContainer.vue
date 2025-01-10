<template>
  <MissionModal
    :title="ModalContent.title"
    :WKey="ModalContent.WKey"
    :description="ModalContent.description"
    @close-modal="closeModal"
    v-if="showModal" 
  />
  <!-- Menu Section -->
  <section>
  <article class="absolute top-2 flex justify-between items-center w-full z-30 px-6">
    <p class="title-fontface text-4xl custom-pointer">Kapuf</p>
    <ul class="flex items-center gap-x-5">
      <li :class="['size-24 border-white border-8 flex justify-center items-center',gameStore.completionNotification ? 'bg-lime-500' : 'bg-stone-300']">Objects</li>
      <li :class="['size-24 border-white border-8 bg-stone-300']"></li>
      <li :class="['size-24 border-white border-8 bg-stone-300']"></li>
    </ul>
    <div class="flex gap-x-5">
      <button class="title-fontface text-4xl custom-pointer">Credits</button>
      <button class="title-fontface text-4xl custom-pointer">Help</button>
    </div>
  </article>
</section>
  <!-- Map Illustration -->
  <Map>
    <Bird :x-position="1500" :y-position="1100" id="item003" type="item" @check-item="openModalContent" />
    <Place :x-position="2500" :y-position="2100" id="item002" type="place" @check-item="openModalContent" />
  </Map>
</template>

<script setup lang="ts">
  // Interfaces
  import type { ModalInterface } from '../interfaces/ModalInterface';

  // Stores 
  import { useGameStore } from '../stores/GameStore';
  import { ref } from 'vue';
  import Map from '../components/IllustratedMap.vue';
  import Bird from '../components/items/BirdItem.vue';
  import Place from '../components/items/PlaceItem.vue';
  import MissionModal from '../components/MissionModal.vue';
  const gameStore = useGameStore();

  // Rective References
  let showModal = ref(false);
  let ModalContent = ref({} as ModalInterface);

  // Methods
  const closeModal = () => {
    showModal.value = false;
    ModalContent.value = {} as ModalInterface;
  }

  const openModalContent = (content: ModalInterface) => {
    ModalContent.value = content;
    showModal.value = !showModal.value;
    const isFound = gameStore.userFindObjects.find(item => item.id === content.id && item.type === content.type);
    if (isFound) isFound.found = true;
  };

</script>