<template>
  <MissionModal
    :title="ModalContent.title"
    :WKey="ModalContent.WKey"
    :description="ModalContent.description"
    @close-modal="closeModal"
    v-if="showModal" 
  >
  <template #itemFound>
    <div class="flex gap-x-10 justify-between h-full">
      <span class="w-2/5">
        <h1 v-if="ModalContent.WKey" class="text-lg font-bold text-lime-700 tracking-wide uppercase">{{ ModalContent.WKey }}</h1>
        <h2 class="text-5xl my-4">{{ModalContent.title}}</h2>
        <p class="text-pretty basis-text"> {{ ModalContent.description }}</p>
      </span>
      <figure class="relative w-3/5 flex justify-center items-center h-full">
        <img class="absolute" width="400" src="/images/card-back.svg" alt="">
        <img class="absolute" width="400" src="/images/cave-of-kokkalis.webp" alt="">
      </figure>
    </div>
  </template>
  <template #footer>
    <div class="self-start flex gap-x-3">
      <p class="bg-white rounded-lg px-3 py-1 w-fit">{{  gameStore.countItems }}</p>
      <button class="bg-white rounded-lg px-3 py-1" @click="goToList">See the List</button>
    </div>
  </template>
  </MissionModal>
  <!-- Menu Section -->
  <MenuSection :is-visible="showItemListModal" />
  <!-- Map Illustration -->
  <Map>
    <Bird :x-position="1500" :y-position="1100" id="bird_item" type="item" @check-item="openModalContent" />
    <Lion :x-position="2500" :y-position="2100" id="lion_item" type="item" @check-item="openModalContent" />
    <Mono :x-position="3500" :y-position="900" id="mono_item" type="item" @check-item="openModalContent" />
    <Frog :x-position="500" :y-position="500" id="frog_item" type="item" @check-item="openModalContent" />
    <Place :x-position="4500" :y-position="3100" id="item005" type="place" @check-item="openModalContent" />
  </Map>
</template>

<script setup lang="ts">
  // Interfaces
  import type { ModalInterface } from '../interfaces/ModalInterface';

  // Items
  import Bird from '../components/items/BirdItem.vue';
  import Place from '../components/items/PlaceItem.vue';
  import Lion from './items/LionItem.vue';
  import Frog from './items/FrogItem.vue';
  import Mono from './items/MonoItem.vue';


  // Modals
  import MissionModal from '../components/MissionModal.vue';
  import MenuSection from '../components/MenuSection.vue';

  // Stores 
  import { useGameStore } from '../stores/GameStore';
  import { ref } from 'vue';
  import Map from '../components/IllustratedMap.vue';

  const gameStore = useGameStore();

  // Rective References
  let showModal = ref(false);
  let ModalContent = ref({} as ModalInterface);
  let showItemListModal = ref(false);

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

  const goToList = () => {
    closeModal();
    showItemListModal.value = true;
  }

</script>