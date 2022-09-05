import { Isysinfo } from '@/models/Isysinfo';
import { Istorage } from '@/models/Istorage';
import { Iolsr } from '@/models/Iolsr';
import { Imeshrf } from '@/models/Imeshrf';
import { Imemory } from '@/models/Imemory';
import { Ilocation } from '@/models/Ilocation';
import { Ilocalhost } from './../models/Ilocalhost';
import { Iip } from '@/models/Iip';
import { Ialerts } from '@/models/Ialert';
import { NodeDataEnum } from '@/types'

import { useAlertStore } from '@/stores/AlertsStore'
import { useIpStore } from '@/stores/IpStore'
import { useLocationStore } from '@/stores/LocationStore'
import { useMemoryStore } from '@/stores/MemoryStore'
import { useMeshrfStore } from '@/stores/MeshrfStore'
import { useOlsrStore } from '@/stores/OlsrStore'
import { useStorageStore } from '@/stores/StorageStore'
import { useSysinfoStore } from '@/stores/SysinfoStore'
import { useResourcesStore } from '@/stores/ResourcesStore'

export class DataHelperServices {
  private alertStore = useAlertStore()
  private ipStore = useIpStore()
  private locationStore = useLocationStore()
  private memoryStore = useMemoryStore()
  private meshrfStore = useMeshrfStore()
  private olsrStore = useOlsrStore()
  private storageStore = useStorageStore()
  private sysinfoStore = useSysinfoStore()
  
  clearResources() {
    this.alertStore.clearValue()
    this.ipStore.clearValue()
    this.locationStore.clearValue()
    this.memoryStore.clearValue()
    this.meshrfStore.clearValue()
    this.olsrStore.clearValue()
    this.storageStore.clearValue()
    this.sysinfoStore.clearValue()
  }

  saveResources(resource: NodeDataEnum, value: Object) {
    switch (resource) {
      case NodeDataEnum.alerts:
        this.alertStore.setValue(value as Ialerts)
        break

      case NodeDataEnum.ip:
        this.ipStore.setValue(value as Iip)
        break

      case NodeDataEnum.location:
        this.locationStore.setValue(value as Ilocation)
        break

      case NodeDataEnum.memory:
        this.memoryStore.setValue(value as Imemory)
        break

      case NodeDataEnum.meshrf:
        this.meshrfStore.setValue(value as Imeshrf)
        break

      case NodeDataEnum.olsr:
        this.olsrStore.setValue(value as Iolsr)
        break

      case NodeDataEnum.storage:
        this.storageStore.setValue(value as Istorage)
        break

      case NodeDataEnum.sysinfo:
        this.sysinfoStore.setValue(value as Isysinfo)
        break
    }
  }
}
