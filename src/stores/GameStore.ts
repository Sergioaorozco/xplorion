import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { sourceAnimal } from '../assets/items/animals';
import { sourcePlaces } from '../assets/items/places';

export const useGameStore = defineStore('gameAdvance', () => {
  const userFindAnimals = ref(sourceAnimal);
  const userFindPlaces = ref(sourcePlaces);

  // Computed Properties
  const isAnimalsCompleted = computed(() => {
    return userFindAnimals.value.every((item) => item.found);
  })

  const isPlacesCompleted = computed(() => {
    return userFindPlaces.value.every((item) => item.found);
  })

  const countAnimals = computed(() => {
    let totalAnimals = userFindAnimals.value.length;
    let foundPlaces = userFindAnimals.value.filter((item) => item.found).length;
    return `${foundPlaces} / ${totalAnimals}`;
  })

  const countPlaces = computed(() => {
    let totalPlaces = userFindPlaces.value.length;
    let foundPlaces = userFindPlaces.value.filter((item) => item.found).length;
    return `${foundPlaces} / ${totalPlaces}`;
  })

  //Methods

  const getItemById = (requestedId:string) => {
    const totalItems = [...userFindPlaces.value,...userFindAnimals.value]
    const itemToRender = totalItems.find(item => item.id == requestedId);
    return itemToRender ?? false
  }

  return {
    userFindAnimals,
    userFindPlaces,
    isAnimalsCompleted,
    isPlacesCompleted,
    countAnimals,
    countPlaces,
    getItemById
  }
})