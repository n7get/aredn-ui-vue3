import { NodeDataEnum } from '@/types'

import { Ialerts } from '@/models/Ialert'
import { Iallhost } from '@/models/Iallhosts'
import { Icurrentneighbors } from '@/models/Icurrentneighbors'
import { Ifreqlist } from '@/models/Ifreqlist'
import { Iip } from '@/models/Iip'
import { Ilocalhost } from './../models/Ilocalhost'
import { Ilocation } from '@/models/Ilocation'
import { Imemory } from '@/models/Imemory'
import { Imeshrf } from '@/models/Imeshrf'
import { Iolsr } from '@/models/Iolsr'
import { Iremotenode } from './../models/Iremotenode'
import { Iservice } from './../models/Iservice'
import { Istorage } from '@/models/Istorage'
import { Isysinfo } from '@/models/Isysinfo'
import { Itopology } from './../models/Itopology'

import { useAlertStore } from '@/stores/AlertsStore'
import { useAllhostsStore } from '@/stores/AllhostsStore'
import { useCurrentneighborsStore } from './../stores/CurrentneighborsStore'
import { useFreqlistStore } from './../stores/FreqlistStore'
import { useIpStore } from '@/stores/IpStore'
import { useLocalhostsStore } from './../stores/LocalhostsStore'
import { useLocationStore } from '@/stores/LocationStore'
import { useMemoryStore } from '@/stores/MemoryStore'
import { useMeshrfStore } from '@/stores/MeshrfStore'
import { useOlsrStore } from '@/stores/OlsrStore'
import { usePreviousneighborsStore } from './../stores/PreviousneighborsStore'
import { useRemotenodesStore } from './../stores/RemotenodesStore'
import { useServicesStore } from './../stores/ServicesStore'
import { useStorageStore } from '@/stores/StorageStore'
import { useSysinfoStore } from '@/stores/SysinfoStore'
import { useTopologyStore } from '@/stores/TopologyStore'

export class DataHelperServices {
  private alertStore = useAlertStore()
  private allhostsStore = useAllhostsStore()
  private currentneighborsStore = useCurrentneighborsStore()
  private freqlistStore = useFreqlistStore()
  private ipStore = useIpStore()
  private localhostsStore = useLocalhostsStore()
  private locationStore = useLocationStore()
  private memoryStore = useMemoryStore()
  private meshrfStore = useMeshrfStore()
  private olsrStore = useOlsrStore()
  private previousneighborsStore = usePreviousneighborsStore()
  private remotenodesStore = useRemotenodesStore()
  private servicesStore = useServicesStore()
  private storageStore = useStorageStore()
  private sysinfoStore = useSysinfoStore()
  private topologyStore = useTopologyStore()

  clearResources() {
    this.alertStore.clearValue()
    this.allhostsStore.clearValue()
    this.currentneighborsStore.clearValue()
    this.freqlistStore.clearValue()
    this.ipStore.clearValue()
    this.localhostsStore.clearValue()
    this.locationStore.clearValue()
    this.memoryStore.clearValue()
    this.meshrfStore.clearValue()
    this.olsrStore.clearValue()
    this.previousneighborsStore.clearValue()
    this.remotenodesStore.clearValue()
    this.servicesStore.clearValue()
    this.storageStore.clearValue()
    this.sysinfoStore.clearValue()
    this.topologyStore.clearValue()
  }

  saveResources(resource: NodeDataEnum, value: Object) {
    switch (resource) {
      case NodeDataEnum.alerts:
        this.alertStore.setValue(value as Ialerts)
        break

      case NodeDataEnum.allhosts:
        this.allhostsStore.setValue(value as Iallhost[])
        break

      case NodeDataEnum.currentneighbors:
        this.currentneighborsStore.setValue(value as Icurrentneighbors)
        break

      case NodeDataEnum.freqlist:
        this.freqlistStore.setValue(value as Ifreqlist[])
        break

      case NodeDataEnum.localhosts:
        this.localhostsStore.setValue(value as Ilocalhost[])
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

      case NodeDataEnum.previousneighbors:
        // this.previousneighborsStore.setValue(value as Ipreviousneighbors)
        throw new Error('previousneighbors not implemented')
        break

      case NodeDataEnum.remotenodes:
        this.remotenodesStore.setValue(value as Iremotenode[])
        break

      case NodeDataEnum.services:
        this.servicesStore.setValue(value as Iservice[])
        break

      case NodeDataEnum.storage:
        this.storageStore.setValue(value as Istorage)
        break

      case NodeDataEnum.sysinfo:
        this.sysinfoStore.setValue(value as Isysinfo)
        break

      case NodeDataEnum.topology:
        this.topologyStore.setValue(value as Itopology[])
        break
    }
  }
}
