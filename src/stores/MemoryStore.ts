import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Imemory } from '@/models/Imemory'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'

export const useMemoryStore = defineStore('MemoryStore', () => {
  const freeram = ref(0)
  const totalram = ref(0)
  const sharedram = ref(0)
  const bufferram = ref(0)

  const loaded = ref(false)

  function setValue(value: Imemory) {
    freeram.value = value.freeram
    totalram.value = value.totalram
    sharedram.value = value.sharedram
    bufferram.value = value.bufferram
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    freeram.value = 0
    totalram.value = 0
    sharedram.value = 0
    bufferram.value = 0
  }

  const resourcesStore = useResourcesStore()

  function addMemoryResource() {
    return resourcesStore.addResource(NodeDataEnum.memory)
  }
  function removeMemoryResource() {
    return resourcesStore.removeResource(NodeDataEnum.memory)
  }

  return {
    freeram,
    totalram,
    sharedram,
    bufferram,
    loaded,
    setValue,
    clearValue,
    addMemoryResource,
    removeMemoryResource,
  }
})
