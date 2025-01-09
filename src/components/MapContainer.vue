<template>
    <MissionModal
      :title="ModalContent.title"
      :WKey="ModalContent.WKey"
      :description="ModalContent.description"
      @close-modal="toggleModal"
      v-if="showModal" 
    />
  <Map>
    <Bird :x-position="1500" :y-position="1100" id="item003" type="item" @check-item="toggleModal" />
    <Place :x-position="2500" :y-position="2100" id="item002" type="place" @check-item="toggleModal" />
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
  let showModal = ref(false);
  let ModalContent = ref({} as ModalInterface);

  const toggleModal = (content: ModalInterface) => {
    ModalContent.value = content;
    showModal.value = !showModal.value;
    const isFound = gameStore.userFindObjects.find(item => item.id === content.id && item.type === content.type);
    if (isFound) isFound.found = true;
  };

</script>