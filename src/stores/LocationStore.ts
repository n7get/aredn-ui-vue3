import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Ilocation } from '@/models/Ilocation'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'

export const useLocationStore = defineStore('LocationStore', () => {
  const lon = ref('')
  const lat = ref('')
  const gridsquare = ref('')

  const loaded = ref(false)

  function setValue(value: Ilocation) {
    lon.value = value.lon
    lat.value = value.lat
    gridsquare.value = value.gridsquare
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    lon.value = ''
    lat.value = ''
    gridsquare.value = ''
  }

  const resourcesStore = useResourcesStore()

  function addLocationResource() {
    return resourcesStore.addResource(NodeDataEnum.location)
  }
  function removeLocationResource() {
    return resourcesStore.removeResource(NodeDataEnum.location)
  }

  return {
    lon,
    lat,
    gridsquare,
    loaded,
    setValue,
    clearValue,
    addLocationResource,
    removeLocationResource,
  }
})
