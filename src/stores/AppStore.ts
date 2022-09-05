import { BackendServices } from './../services/BackendServices';
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useResourcesStore } from '@/stores/ResourcesStore';
import { useSysinfoStore } from '@/stores/SysinfoStore'
import { MockBackendServices } from '@/services/MockBackendServices';
import { NodeBacnendServices } from '@/services/NodeBacnendServices'
import { NodeDataEnum } from '@/types';

export const useAppStore = defineStore('AppStore', () => {
  const sysinfoStore = useSysinfoStore()
  const { getRequiredResources } = useResourcesStore()

  const nodeName = computed(() => sysinfoStore.node || 'localnodde')
  const legacyUrl = ref('')

  const hasApiMismatch = ref(false)

  const hasError = ref(false)
  const errorMessage = ref('')
  function setError(message: string) {
    errorMessage.value = message
    hasError.value = true
  }
  function clearError() {
    hasError.value = false
  }

  const loading = ref(false)
  function setLoading(value: boolean) {
    loading.value = value
  }

  function setApiMismatch(value: boolean) {
    hasApiMismatch.value = value
  }

  const mode = import.meta.env.VITE_APP_MODE
  const backendServices = mode === 'test' ? new MockBackendServices() : new NodeBacnendServices()

  function clearNodeData() {
    backendServices.clearResources()
  }

  function loadNodeData() {
    const requiredResources = getRequiredResources([NodeDataEnum.alerts, NodeDataEnum.sysinfo])
    const node = sysinfoStore.node || 'localnode'

    backendServices.loadResources(node, requiredResources)
  }

  return {
    hasApiMismatch,
    hasError,
    errorMessage,
    setError,
    clearError,
    loading,
    setLoading,
    legacyUrl,
    nodeName,
    setApiMismatch,
    clearNodeData,
    loadNodeData,
  }
})
