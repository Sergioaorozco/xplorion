<script setup lang="ts">
import { ref } from 'vue';
import Map from './components/IllustratedMap.vue';
import Bird from './components/items/BirdItem.vue';
import MissionModal from './components/MissionModal.vue';

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
}
</script>

<template>
  <Map>
    <Bird :x-position="1500" :y-position="1100" taxonomy="bird" @check-item="toggleModal" />
    <MissionModal v-if="showModal" />
  </Map>
</template>
