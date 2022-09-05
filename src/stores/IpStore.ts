import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Iip } from '@/models/Iip'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'

export const useIpStore = defineStore('IpStore', () => {
  const wifi = ref('')
  const wan = ref('')
  const gateway = ref('')
  const lan = ref('')

  const loaded = ref(false)

  function setValue(value: Iip) {
    wifi.value = value.wifi
    wan.value = value.wan
    gateway.value = value.gateway
    lan.value = value.lan
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    wifi.value = ''
    wan.value = ''
    gateway.value = ''
    lan.value = ''
  }

  const resourcesStore = useResourcesStore()

  function addIpResource() {
    return resourcesStore.addResource(NodeDataEnum.ip)
  }
  function removeIpResource() {
    return resourcesStore.removeResource(NodeDataEnum.ip)
  }

  return {
    wifi,
    wan,
    gateway,
    lan,
    loaded,
    setValue,
    clearValue,
    addIpResource,
    removeIpResource,
  }
})
