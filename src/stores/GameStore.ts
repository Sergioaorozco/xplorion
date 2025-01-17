import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { sourceAnimal } from '../assets/items/animals';
import { sourcePlaces } from '../assets/items/places';

export const useGameStore = defineStore('gameAdvance', () => {
  // defining Types
  const TYPES = {ANIMAL:'animal', PLACE:'place'}

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

  const getContentByType = (requestedType:string) => {
    // Method to fill the content modal
    switch(requestedType) {
      case TYPES.ANIMAL:
        return {
          info: userFindAnimals.value,
          count: countAnimals.value,
          title: 'List of Animals',
          defaultImage: "this.src='/images/items/Bird.svg'"
        }
      case TYPES.PLACE:
        return {
          info: userFindPlaces.value,
          count: countPlaces.value,
          title: 'List of Places',
          defaultImage: "this.src='/images/items/Lion.svg'"
        }
      default:
        alert(`Invalid type: ${requestedType}`);
        return { info: [], count: '', title: '', defaultImage: ''};
    }
  }

  return {
    userFindAnimals,
    userFindPlaces,
    isAnimalsCompleted,
    isPlacesCompleted,
    countAnimals,
    countPlaces,
    getItemById,
    getContentByType,
    TYPES
  }
})