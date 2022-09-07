import { ref } from 'vue';
import { defineStore } from "pinia";
import { NodeDataEnum } from '@/types';
import { useResourcesStore } from './ResourcesStore';
import { Iremotenode } from './../models/Iremotenode';

export const useRemotenodesStore = defineStore('RemotenodesStore', () => {
  const remotenodes = ref<Iremotenode[]>([])
  const loaded = ref(false)

  function setValue(value: Iremotenode[]) {
    remotenodes.value = value
    loaded.value = true
  }

  function clearValue() {
    remotenodes.value = []
    loaded.value = false
  }

  const resourcesStore = useResourcesStore()

  function addRemotenodesResource() {
    return resourcesStore.addResource(NodeDataEnum.remotenodes)
  }
  function removeRemotenodesResource() {
    return resourcesStore.removeResource(NodeDataEnum.remotenodes)
  }

  return {
    loaded,
    setValue,
    clearValue,
    addRemotenodesResource,
    removeRemotenodesResource,
  }
})

