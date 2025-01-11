<template>
  <article class="w-container">
    <div
      class="map"
      @mousedown="startPosition"
      :style="{ transform: `translate3d(${translateX}px, ${translateY}px, 0px)` }"
    >
      <img class="map_image min-w-full min-h-full" src="/src/assets/images/scenery-BG.webp" alt="" />
      <slot></slot>
  </div>
</article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Position {
  x: number;
  y: number;
}

let translateX = ref(0) as { value: number };
let translateY = ref(0) as { value: number };
let initialPosition = ref({x: 0, y: 0} as Position);
let mapWidth = ref(0);
let mapHeight = ref(0);
let isDragging = ref(false);

const startPosition = (event: MouseEvent) => {
  event.preventDefault();
  isDragging.value = true;
  initialPosition.value = { x: event.clientX - translateX.value, y: event.clientY - translateY.value };
  window.addEventListener('mousemove', exploringMap);
  window.addEventListener('mouseup', endPosition);
};

const exploringMap = (event: MouseEvent) => {
  if(!isDragging.value) return;

  const deltaX = event.clientX - initialPosition.value.x;
  const deltaY = event.clientY - initialPosition.value.y;

  //Calculating Boundaries
  const maxW = Math.max(0, mapWidth.value - window.innerWidth);
  const maxH = Math.max(0, mapHeight.value - window.innerHeight);
  
  // Prevent OverScrolling
    translateX.value = Math.max(-maxW, Math.min(0, deltaX));
    translateY.value = Math.max(-maxH, Math.min(0, deltaY));
} 

const endPosition = () => {
  isDragging.value = false;
  window.removeEventListener('mousemove', exploringMap);
  window.removeEventListener('mouseup', endPosition);
}

onMounted(() => {
  const $map = document.querySelector('.map') as HTMLElement;
  mapWidth.value = $map.offsetWidth;
  mapHeight.value = $map.offsetHeight;
})

</script>

<style scoped>
.map {
  cursor: url(/src/assets/images/cursors/hand.png), auto;
}
.map:active {
  cursor: url(/src/assets/images/cursors/drag.png), auto;

}
</style>
