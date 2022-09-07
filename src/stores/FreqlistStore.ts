import { ref } from 'vue'
import { defineStore } from 'pinia'
import { NodeDataEnum } from '@/types'
import { useResourcesStore } from './ResourcesStore'
import { Ifreqlist } from './../models/Ifreqlist'

export const useFreqlistStore = defineStore('FreqlistStore', () => {
  const freqlist = ref<Ifreqlist[]>([])
  const loaded = ref(false)

  function setValue(value: Ifreqlist[]) {
    freqlist.value = value
    loaded.value = true
  }

  function clearValue() {
    freqlist.value = []
    loaded.value = false
  }

  const resourcesStore = useResourcesStore()

  function addFreqlistResource() {
    return resourcesStore.addResource(NodeDataEnum.freqlist)
  }
  function removeFreqlistResource() {
    return resourcesStore.removeResource(NodeDataEnum.freqlist)
  }

  return {
    loaded,
    setValue,
    clearValue,
    addFreqlistResource,
    removeFreqlistResource,
  }
})
