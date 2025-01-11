<template>
  <MissionModal
    :title="ModalContent.title"
    :WKey="ModalContent.WKey"
    :description="ModalContent.description"
    @close-modal="closeModal"
    v-if="showModal" 
  >
  <template #itemFound>
    <div class="flex gap-x-2 justify-between">
      <span class="w-2/5">
        <h1 v-if="ModalContent.WKey" class="text-lg font-bold text-lime-700 tracking-wide uppercase">{{ ModalContent.WKey }}</h1>
        <h2 class="text-5xl my-4">{{ModalContent.title}}</h2>
        <p class="text-pretty basis-text"> {{ ModalContent.description }}</p>
        <button class="mt-9">See the List</button>
      </span>
      <figure class="relative w-[400px] h-[300px]">
        <img class="absolute" src="../assets/images/card-back.svg" alt="">
        <img class="absolute" src="../assets/images/cave-of-kokkalis.webp" alt="">
      </figure>
    </div>
  </template>
  </MissionModal>
  <!-- Menu Section -->
  <MenuSection />
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
  import MenuSection from '../components/MenuSection.vue';
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