import { ref } from 'vue'
import { defineStore } from 'pinia'
import { NodeDataEnum } from '@/types'
import { useResourcesStore } from './ResourcesStore'

export const usePreviousneighborsStore = defineStore(
  'PreviousneighborsStore',
  () => {
    // const previousneighbors = ref<>([])
    const loaded = ref(false)

    function setValue(value: []) {
      loaded.value = true
    }

    function clearValue() {
      loaded.value = false
    }

    const resourcesStore = useResourcesStore()

    function addPreviousneighborsResource() {
      return resourcesStore.addResource(NodeDataEnum.previousneighbors)
    }
    function removePreviousneighborsResource() {
      return resourcesStore.removeResource(NodeDataEnum.previousneighbors)
    }

    return {
      loaded,
      setValue,
      clearValue,
      addPreviousneighborsResource,
      removePreviousneighborsResource,
    }
  }
)
