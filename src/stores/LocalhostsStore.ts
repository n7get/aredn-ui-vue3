import { ref } from 'vue';
import { defineStore } from "pinia";
import { NodeDataEnum } from '@/types';
import { useResourcesStore } from './ResourcesStore';
import { Ilocalhost } from './../models/Ilocalhost';

export const useLocalhostsStore = defineStore('LocalhostsStore', () => {
  const localhosts = ref<Ilocalhost[]>([])
  const loaded = ref(false)

  function setValue(value: Ilocalhost[]) {
    localhosts.value = value
    loaded.value = true
  }

  function clearValue() {
    localhosts.value = []
    loaded.value = false
  }

  const resourcesStore = useResourcesStore()

  function addLocalhostsResource() {
    return resourcesStore.addResource(NodeDataEnum.localhosts)
  }
  function removeLocalhostsResource() {
    return resourcesStore.removeResource(NodeDataEnum.localhosts)
  }

  return {
    loaded,
    setValue,
    clearValue,
    addLocalhostsResource,
    removeLocalhostsResource,
  }
})

