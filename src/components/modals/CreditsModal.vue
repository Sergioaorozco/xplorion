<template>
  <creditsModal v-if="isVisible" @close-modal="$emit('toggleModal', false)">
    <template v-slot:itemList>
      <div class="h-full">
        <h2 class="text-5xl text-center">Credits</h2>
        <span class="content-fontface text-center mt-5">
          <p>Created by Sergio Orozco inspired on Explore Prespa</p>
          <p>Look at the Source Code</p>
        </span>
      </div>
    </template>
  </creditsModal>
</template>


<script setup>
import creditsModal from '../MissionModal.vue';
const props = defineProps({isVisible: Boolean});
const emit = defineEmits(['toggleModal']);
</script>