import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore('gameAdvance', () => {
  const userFindObjects = ref([
    { name: 'item1', found: false, type:'item', id:'item001' },
    { name: 'item2', found: false, type:'item', id:'item002' },
    { name: 'item3', found: false, type:'item', id:'item003' },
    { name: 'item4', found: false, type:'item', id:'item004' },
  ])

  return { userFindObjects}
})