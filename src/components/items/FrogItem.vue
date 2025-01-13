<script setup lang="ts">
const emit = defineEmits(['check-item']);

const props = defineProps({
  xPosition: {
    type: Number,
    required: true
  },
  yPosition: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const testAnimal = () => {
  emit('check-item', {
    type: props.type,
    title: 'FireBird of Utah',
    id: props.id,
    WKey: 'You have discovered a Bird',
    description: "During the Second World War, the republican army built a cave in Mount Vrontero to make it a hospital for the wounded. It got it's name from doctor Petros Kokkalis.",
  });
}
</script>

<template>
  <article
    @click="testAnimal"
    class="map-item-container absolute z-10"
    :style = "{ top: yPosition + 'px', left: xPosition + 'px' }"
  >
    <figure class="map-item">
      <img class="" src="/src/assets/images/Frog.svg" alt="Frog item in the map" />
    </figure>
  </article>
</template>


<style scoped>
.map-item:hover { cursor: url('/src/assets/images/cursors/watch.png'), auto; }
</style>
