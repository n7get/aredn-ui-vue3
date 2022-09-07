import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'
import { Ialerts } from '@/models/Ialert'

export const useAlertStore = defineStore('AlertsStore', () => {
  const alerts = ref<Ialerts>({})

  const loaded = ref(false)

  function setValue(value: Ialerts) {
    alerts.value = value
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    alerts.value = {}
  }

  const resourcesStore = useResourcesStore()

  function addAlertsResource() {
    return resourcesStore.addResource(NodeDataEnum.alerts)
  }
  function removeAlertsResource() {
    return resourcesStore.removeResource(NodeDataEnum.alerts)
  }

  return {
    alerts,
    loaded,
    setValue,
    clearValue,
    addAlertsResource,
    removeAlertsResource,
  }
})
