import { BackendServices } from './BackendServices';
import { NodeDataEnum } from '@/types'
import { DataHelperServices } from "@/services/DataHelperServices"

import alertsJson from '@/data/alerts.json'
// import allhostsJson from '@/data/allhosts.json'
// import bynodeJson from "@/data/bynode.json";
// import byserviceJson from "@/data/byservice.json";
import currentneighborsJson from '@/data/currentneighbors.json'
import freqlistJson from '@/data/freqlist.json'
import ipJson from '@/data/ip.json'
import localhostsJson from '@/data/localhosts.json'
import locationJson from '@/data/location.json'
import memoryJson from '@/data/memory.json'
import meshrfJson from '@/data/meshrf.json'
import olsrJson from '@/data/olsr.json'
import previousneighborsJson from "@/data/previousneighbors.json";
import remotenodesJson from '@/data/remotenodes.json'
import servicesJson from '@/data/services.json'
import storageJson from '@/data/storage.json'
import sysinfoJson from '@/data/sysinfo.json'
import topologyJson from "@/data/topology.json";

export class MockBackendServices implements BackendServices {
  private dataHelperServices = new DataHelperServices()

  clearResources(): void {
    this.dataHelperServices.clearResources()
  }

 loadResources(nodeName: string, requiredResources: NodeDataEnum[]): void {
    requiredResources.forEach((resource) => {
      switch (resource) {
        case NodeDataEnum.alerts:
          this.dataHelperServices.saveResources(NodeDataEnum.alerts, alertsJson)
          break

        case NodeDataEnum.currentneighbors:
          this.dataHelperServices.saveResources(NodeDataEnum.currentneighbors, currentneighborsJson)
          break

        case NodeDataEnum.freqlist:
          this.dataHelperServices.saveResources(NodeDataEnum.freqlist, freqlistJson)
          break

        case NodeDataEnum.ip:
          this.dataHelperServices.saveResources(NodeDataEnum.ip, ipJson)
          break

        case NodeDataEnum.localhosts:
          this.dataHelperServices.saveResources(NodeDataEnum.localhosts, localhostsJson)
          break
        case NodeDataEnum.location:
          this.dataHelperServices.saveResources(NodeDataEnum.location, locationJson)
          break

        case NodeDataEnum.memory:
          this.dataHelperServices.saveResources(NodeDataEnum.memory, memoryJson)
          break

        case NodeDataEnum.meshrf:
          this.dataHelperServices.saveResources(NodeDataEnum.meshrf, meshrfJson)
          break

        case NodeDataEnum.olsr:
          this.dataHelperServices.saveResources(NodeDataEnum.olsr, olsrJson)
          break

        case NodeDataEnum.previousneighbors:
          this.dataHelperServices.saveResources(NodeDataEnum.previousneighbors, previousneighborsJson)
          break

        case NodeDataEnum.remotenodes:
          this.dataHelperServices.saveResources(NodeDataEnum.remotenodes, remotenodesJson)
          break

        case NodeDataEnum.services:
          this.dataHelperServices.saveResources(NodeDataEnum.services, servicesJson)
          break

        case NodeDataEnum.storage:
          this.dataHelperServices.saveResources(NodeDataEnum.storage, storageJson)
          break

        case NodeDataEnum.sysinfo:
          this.dataHelperServices.saveResources(NodeDataEnum.sysinfo, sysinfoJson)
          break

        case NodeDataEnum.topology:
          this.dataHelperServices.saveResources(NodeDataEnum.topology, topologyJson)
          break
      }
    })
  }
}
