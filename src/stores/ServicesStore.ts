import { ref } from 'vue'
import { defineStore } from 'pinia'
import { NodeDataEnum } from '@/types'
import { useResourcesStore } from './ResourcesStore'
import { Iservice } from './../models/Iservice'

export const useServicesStore = defineStore('ServicesStore', () => {
  const services = ref<Iservice[]>([])
  const loaded = ref(false)

  function setValue(value: Iservice[]) {
    services.value = value
    loaded.value = true
  }

  function clearValue() {
    services.value = []
    loaded.value = false
  }

  const resourcesStore = useResourcesStore()

  function addServicesResource() {
    return resourcesStore.addResource(NodeDataEnum.services)
  }
  function removeServicesResource() {
    return resourcesStore.removeResource(NodeDataEnum.services)
  }

  return {
    loaded,
    setValue,
    clearValue,
    addServicesResource,
    removeServicesResource,
  }
})
