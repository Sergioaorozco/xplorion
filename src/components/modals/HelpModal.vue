<template>
    <helpModal v-if="isVisible" @close-modal="$emit('toggleModal', false)">
    <template v-slot:itemFound>
      <div class="flex gap-x-10 justify-between h-full">
        <span class="w-3/5">
          <h2 class="text-5xl px-5">How to Play</h2>
          <ul class="content-fontface mt-5 list-decimal">
            <li>Look for any of the items within the map.</li>
            <li>Click the item once you find it.</li>
            <li>Learn new things about the Country</li>
            <li>Check which other item is missing.</li>
            <li>Once you completed the tasks, download the certificate</li>
          </ul>
        </span>
        <figure class="relative w-3/5 flex justify-center items-center h-full">
          <img class="absolute" width="400" src="/images/card-back.svg" alt="">
          <img class="absolute" width="400" src="/images/cave-of-kokkalis.webp" alt="">
        </figure>
      </div>
    </template>
  </helpModal>
</template>

<script setup>
import helpModal from '../MissionModal.vue';
const props = defineProps({isVisible: Boolean});
const emit = defineEmits(['toggleModal']);
</script>