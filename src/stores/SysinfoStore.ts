import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Isysinfo } from '@/models/Isysinfo'
import { useResourcesStore } from '@/stores/ResourcesStore'
import { NodeDataEnum } from '@/types'

function initStore() {
  return {
    description: '',
    date: '',
    api_version: '',
    target_type: '',
    first_boot: false,
    time: '',
    model: '',
    uptime: '',
    loads: [],
    node: '',
    firmware_version: ''
  }
}
export const useSysinfoStore = defineStore('SysinfoStore', () => {
  const description = ref<string | undefined>('')
  const date = ref('')
  const api_version = ref('')
  const target_type = ref('')
  const first_boot = ref(false)
  const time = ref('')
  const model = ref('')
  const uptime = ref('')
  const loads = ref<number[]>([])
  const node = ref('')
  const firmware_version = ref('')

  const loaded = ref(false)

  function setValue(value: Isysinfo) {
    description.value = value.description
    date.value = value.date
    api_version.value = value.api_version
    target_type.value = value.target_type
    first_boot.value = value.first_boot
    time.value = value.time
    model.value = value.model
    uptime.value = value.uptime
    loads.value = value.loads
    node.value = value.node
    firmware_version.value = value.firmware_version
    loaded.value = true
  }

  function clearValue() {
    loaded.value = false
    description.value = ''
    date.value = ''
    api_version.value = ''
    target_type.value = ''
    first_boot.value = false
    time.value = ''
    model.value = ''
    uptime.value = ''
    loads.value = []
    node.value = ''
    firmware_version.value = ''
  }

  const resourcesStore = useResourcesStore()

  function addSysinfoResource() {
    return resourcesStore.addResource(NodeDataEnum.sysinfo)
  }
  function removeSysinfoResource() {
    return resourcesStore.removeResource(NodeDataEnum.sysinfo)
  }

  return {
    description,
    date,
    api_version,
    target_type,
    first_boot,
    time,
    model,
    uptime,
    loads,
    node,
    firmware_version,
    loaded,
    setValue,
    clearValue,
    addSysinfoResource,
    removeSysinfoResource,
  }
})
