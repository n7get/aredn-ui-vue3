import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Istorage } from '@/models/Istorage'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'

export const useStorageStore = defineStore('StorageStore', () => {
  const rootfree = ref(0)
  const tmptotal = ref(0)
  const roottotal = ref(0)
  const tmpfree = ref(0)
  const loaded = ref(false)

  function setValue(value: Istorage) {
    rootfree.value = value.rootfree
    tmptotal.value = value.tmptotal
    roottotal.value = value.roottotal
    tmpfree.value = value.tmpfree
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    rootfree.value = 0
    tmptotal.value = 0
    roottotal.value = 0
    tmpfree.value = 0
  }

  const resourcesStore = useResourcesStore()

  function addStorageResource() {
    return resourcesStore.addResource(NodeDataEnum.storage)
  }
  function removeStorageResource() {
    return resourcesStore.removeResource(NodeDataEnum.storage)
  }

  return {
    rootfree,
    tmptotal,
    roottotal,
    tmpfree,
    loaded,
    setValue,
    clearValue,
    addStorageResource,
    removeStorageResource,
  }
})
