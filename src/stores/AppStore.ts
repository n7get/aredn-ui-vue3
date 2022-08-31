import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNodeStore } from './NodeStore'

export const useAppStore = defineStore('AppStore', () => {
  const nodeStore = useNodeStore()

  const hasApiMismatch = ref(false)
  const legacyUrl = ref('')

  const nodeName = computed(() => nodeStore.sysinfo.node)

  function setApiMismatch(value: boolean) {
    hasApiMismatch.value = value
  }

  return {
    hasApiMismatch,
    legacyUrl,
    nodeName,
    setApiMismatch,
  }
})
