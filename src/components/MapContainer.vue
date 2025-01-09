<template>
    <MissionModal
      :title="ModalContent.title"
      :WKey="ModalContent.WKey"
      :description="ModalContent.description"
      @close-modal="toggleModal"
      v-if="showModal" 
    />
  <Map>
    <Bird :x-position="1500" :y-position="1100" taxonomy="bird" @check-item="toggleModal" />
  </Map>
</template>

<script setup lang="ts">
  // Interfaces
  import type { ModalInterface } from '../interfaces/ModalInterface';

  import { ref } from 'vue';
  import Map from '../components/IllustratedMap.vue';
  import Bird from '../components/items/BirdItem.vue';
  import MissionModal from '../components/MissionModal.vue';

  let showModal = ref(false);
  let ModalContent = ref({} as ModalInterface);

  const toggleModal = (content: ModalInterface) => {
    ModalContent.value = content;
    showModal.value = !showModal.value;
  };

</script>