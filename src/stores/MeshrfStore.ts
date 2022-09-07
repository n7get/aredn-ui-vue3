import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'
import { Imeshrf } from '@/models/Imeshrf'

function initStore() {
  return {
    band: '',
    ssid: '',
    channel: '',
    device: '',
    chanbw: '',
    frequency: '',
  }
}

export const useMeshrfStore = defineStore('MeshrfStore', () => {
  const band = ref('')
  const ssid = ref('')
  const channel = ref('')
  const device = ref('')
  const chanbw = ref('')
  const frequency = ref('')

  const loaded = ref(false)

  function setValue(value: Imeshrf) {
    band.value = value.band
    ssid.value = value.ssid
    channel.value = value.channel
    device.value = value.device
    chanbw.value = value.chanbw
    frequency.value = value.frequency
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    band.value = ''
    ssid.value = ''
    channel.value = ''
    device.value = ''
    chanbw.value = ''
    frequency.value = ''
  }

  const resourcesStore = useResourcesStore()

  function addMeshrfResource() {
    return resourcesStore.addResource(NodeDataEnum.meshrf)
  }
  function removeMeshrfResource() {
    return resourcesStore.removeResource(NodeDataEnum.meshrf)
  }

  return {
    band,
    ssid,
    channel,
    device,
    chanbw,
    frequency,
    loaded,
    setValue,
    clearValue,
    addMeshrfResource,
    removeMeshrfResource,
  }
})
