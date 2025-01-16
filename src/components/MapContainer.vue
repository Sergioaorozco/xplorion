<template>
  <ItemModal :is-visible="showItemModal" :modal-info="ModalContent" @toggle-modal="checkItemVisibility" @redirect-list="getTypeAction" />
  <MenuSection :is-visible="showSectionModal" :type="getType" @toggle-modal="checkSectionVisibiity" />
  <Map>
    <Item
      v-for="animal in gameStore.userFindAnimals"
      :x-position="animal.xPosition"
      :y-position="animal.yPosition"
      :id="animal.id"
      @check-item="openModalContent"
    />
    <Item
      v-for="place in gameStore.userFindPlaces"
      :x-position="place.xPosition"
      :y-position="place.yPosition"
      :id="place.id"
      @check-item="openModalContent"
    />
  </Map>
</template>

<script setup lang="ts">
  // Interfaces
  import type { ModalInterface } from '../interfaces/ModalInterface';
  import { ref } from 'vue';

  // Items
  import Item from '../components/items/itemComponent.vue';
  import Map from '../components/IllustratedMap.vue';

  // Modals
  import MenuSection from '../components/MenuSection.vue';
  import ItemModal from './modals/ItemModal.vue';
  
  // Stores 
  import { useGameStore } from '../stores/GameStore';
  const gameStore = useGameStore();

  // Rective References
  let showItemModal = ref(false);
  let ModalContent = ref({} as ModalInterface);
  let showSectionModal = ref(false);
  let getType = ref<ModalInterface['type']>("");
  
  // Methods
  const getTypeAction = (info:ModalInterface['type']) => {
    getType.value = info;
    showItemModal.value = !showItemModal.value;
    checkSectionVisibiity({modalType: info, modalValue: true})
  }

  const openModalContent = (content: ModalInterface) => {
    if(!content.id) return;
    ModalContent.value = content;
    showItemModal.value = !showItemModal.value;
    ModalContent.value.found = true;
  };

  const checkSectionVisibiity = ({modalType, modalValue}: {modalType: ModalInterface['type'], modalValue: boolean}) => {
    showSectionModal.value = modalValue;
    getType.value = modalType;
  }

  const checkItemVisibility = (modalValue:boolean) => {
    showItemModal.value = modalValue
    ModalContent.value = {} as ModalInterface;
  }

</script>