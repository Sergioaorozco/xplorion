import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore('gameAdvance', () => {
  const userFindObjects = ref([
    {id:'item001', found: true, type:'item'},
    {id:'item002', found: true, type:'item'},
    {id:'item003', found: false, type:'item'},
    {id:'item004', found: true, type:'item'},
  ])

  const completionNotification = computed(() => {
    return userFindObjects.value.every((item) => item.found);
  })
  return { userFindObjects, completionNotification }
})