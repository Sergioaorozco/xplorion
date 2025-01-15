import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { sourceAnimal } from '../assets/items/animals';

export const useGameStore = defineStore('gameAdvance', () => {
  const userFindObjects = ref(sourceAnimal)

  const completionNotification = computed(() => {
    return userFindObjects.value.every((item) => item.found);
  })

  const countItems = computed(() => {
    let totalItems = userFindObjects.value.length;
    let foundItems = userFindObjects.value.filter((item) => item.found).length;
    return `${foundItems} / ${totalItems}`;
  })

  //Methods

  const getItemById = (requestedId:string) => {
    const itemToRender = userFindObjects.value.find(item => item.id == requestedId);
    return itemToRender ?? false
  }

  return { userFindObjects, completionNotification, countItems, getItemById }
})