import { ref } from 'vue';
import { defineStore } from "pinia";
import { NodeDataEnum } from '@/types';
import { useResourcesStore } from './ResourcesStore';
import { Icurrentneighbors } from './../models/Icurrentneighbors';

export const useCurrentneighborsStore = defineStore('CurrentneighborsStore', () => {
  const currentneighbors = ref<Icurrentneighbors>({})
  const loaded = ref(false)

  function setValue(value: Icurrentneighbors) {
    currentneighbors.value = value
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
  }

  const resourcesStore = useResourcesStore()

  function addCurrentneighborsResource() {
    return resourcesStore.addResource(NodeDataEnum.currentneighbors)
  }
  function removeCurrentneighborsResource() {
    return resourcesStore.removeResource(NodeDataEnum.currentneighbors)
  }

  return {
    loaded,
    setValue,
    clearValue,
    addCurrentneighborsResource,
    removeCurrentneighborsResource,
  }
})

