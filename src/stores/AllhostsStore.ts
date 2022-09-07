import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { NodeDataEnum } from '@/types'
import { useResourcesStore } from './ResourcesStore'
import { Iallhost } from '@/models/Iallhosts'

export const useAllhostsStore = defineStore('AllhostsStore', () => {
  const allhostsByIp = ref<Map<string, string>>(new Map())
  const allhostsByName = ref<Map<string, string>>(new Map())
  const loaded = ref(false)

  const getByIp = computed((ip: string) => allhostsByIp.value.get(ip))
  const getByName = computed((name: string) => allhostsByName.value.get(name))

  function setValue(value: Iallhost[]) {
    value.forEach((v) => {
      allhostsByIp.value.set(v.ip, v.name)
      allhostsByName.value.set(v.name, v.ip)
    })
    loaded.value = true
  }

  function clearValue() {
    allhostsByIp.value.clear()
    allhostsByName.value.clear()
    loaded.value = false
  }

  const resourcesStore = useResourcesStore()

  function addAllhostsResource() {
    return resourcesStore.addResource(NodeDataEnum.allhosts)
  }
  function removeAllhostsResource() {
    return resourcesStore.removeResource(NodeDataEnum.allhosts)
  }

  return {
    getByIp,
    getByName,
    loaded,
    setValue,
    clearValue,
    addAllhostsResource,
    resourcesStore,
  }
  function removeAllhostsResource() {}
})
