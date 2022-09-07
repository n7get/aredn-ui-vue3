import { ref } from 'vue'
import { defineStore } from 'pinia'
import { NodeDataEnum } from '@/types'
import { useResourcesStore } from './ResourcesStore'
import { Itopology } from './../models/Itopology'

export const useTopologyStore = defineStore('TopologyStore', () => {
  const topology = ref<Itopology>()
  const loaded = ref(false)

  function setValue(value: Itopology[]) {
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
  }

  const resourcesStore = useResourcesStore()

  function addTopologyResource() {
    return resourcesStore.addResource(NodeDataEnum.topology)
  }
  function removeTopologyResource() {
    return resourcesStore.removeResource(NodeDataEnum.topology)
  }

  return {
    loaded,
    setValue,
    clearValue,
    addTopologyResource,
    removeTopologyResource,
  }
})
