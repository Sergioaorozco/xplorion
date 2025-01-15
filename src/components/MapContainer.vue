<template>
  <MissionModal
    :title="ModalContent.title"
    :wKey="ModalContent.wKey"
    :description="ModalContent.description"
    @close-modal="closeModal"
    v-if="showModal" 
  >
  <template #itemFound>
    <div class="flex gap-x-10 justify-between h-full">
      <span class="w-2/5">
        <h1 v-if="ModalContent.wKey" class="text-lg font-bold text-lime-700 tracking-wide uppercase">{{ ModalContent.wKey }}</h1>
        <h2 class="text-5xl my-4">{{ModalContent.title}}</h2>
        <p class="text-pretty basis-text font-light text-lg"> {{ ModalContent.description }}</p>
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
      <button class="bg-white rounded-lg px-3 py-1 hover:bg-stone-400 transition-colors duration-200" @click="goToList">See the List</button>
    </div>
  </template>
  </MissionModal>
  <!-- Menu Section -->
  <MenuSection :is-visible="showItemListModal" @check-modal="checkVisibility" />
  <!-- Map Illustration -->
  <Map>
    <Item v-for="item in gameStore.userFindObjects" :x-position="item.xPosition" :y-position="item.yPosition" :id="item.id" @check-item="openModalContent" />
  </Map>
</template>

<script setup lang="ts">
  // Interfaces
  import type { ModalInterface } from '../interfaces/ModalInterface';

  // Items
  import Item from '../components/items/itemComponent.vue';

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
    if(!content.id) return;
    ModalContent.value = content;
    showModal.value = !showModal.value;
    ModalContent.value.found = true;
  };

  const checkVisibility = (modalValue:boolean) => {
    showItemListModal.value = modalValue
  }

  const goToList = () => {
    closeModal();
    showItemListModal.value = true;
  }

</script>