import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore('gameAdvance', () => {
  const userFindObjects = ref([
    {name:'bird', img:'/images/items/Bird.svg',id:'bird_item', found: false, type:'item'},
    {name:'mono', img:'images/items/Mono.svg',id:'mono_item', found: false, type:'item'},
    {name:'frog', img:'/images/items/Frog.svg',id:'frog_item', found: false, type:'item'},
    {name:'lion', img:'/images/items/Lion.svg',id:'lion_item', found: false, type:'item'},
  ])

  const completionNotification = computed(() => {
    return userFindObjects.value.every((item) => item.found);
  })

  const countItems = computed(() => {
    let totalItems = userFindObjects.value.length;
    let foundItems = userFindObjects.value.filter((item) => item.found).length;
    return `${foundItems} / ${totalItems}`;
  })

  return { userFindObjects, completionNotification, countItems }
})