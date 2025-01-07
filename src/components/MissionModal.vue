<template>
  <section v-if="showModal">

  </section>
  
</template>
<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
}

</script>