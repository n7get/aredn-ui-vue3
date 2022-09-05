import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Iolsr } from '@/models/Iolsr'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'

function initStore() {
  return {
    nodes: '',
    entries: '',
  }
}
export const useOlsrStore = defineStore('OlsrStore', () => {
  const nodes = ref('')
  const entries = ref('')

  const loaded = ref(false)

  function setValue(value: Iolsr) {
    nodes.value = value.nodes
    entries.value = value.entries
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    nodes.value = ''
    entries.value = ''
  }

  const resourcesStore = useResourcesStore()

  function addOlsrResource() {
    return resourcesStore.addResource(NodeDataEnum.olsr)
  }
  function removeOlsrResource() {
    return resourcesStore.removeResource(NodeDataEnum.olsr)
  }

  return {
    nodes,
    entries,
    loaded,
    setValue,
    clearValue,
    addOlsrResource,
    removeOlsrResource,
  }
})
