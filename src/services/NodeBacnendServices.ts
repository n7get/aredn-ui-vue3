import axios from 'axios'
import { BackendServices } from './BackendServices'
import { NodeDataEnum } from '@/types'
import { DataHelperServices } from '@/services/DataHelperServices'
import NodeDataEnumUrils from '@/utils/NodeDataEnumUrils'
import { useAppStore } from '@/stores/AppStore'

const scheme = 'http://'
const nodeDomainName = '.local.mesh'
const nodePort = ':8080'
const resourceList = {
  alerts: 'common',
  allhosts: 'mesh',
  archive: 'chart',
  // bynode: 'services', // FIXME: Bad Gateway?
  // byservice: 'services', // FIXME: Bad Gateway?
  currentneighbors: 'mesh',
  freqlist: 'status',
  ip: 'status',
  localhosts: 'mesh',
  location: 'status',
  memory: 'status',
  meshrf: 'status',
  olsr: 'status',
  previousneighbors: 'mesh',
  realtime: 'chart',
  remotenodes: 'mesh',
  scanlist: 'scan',
  services: 'mesh',
  storage: 'status',
  sysinfo: 'common',
  topology: 'mesh',
}

interface ApiData {
  [key: string]:
    | string
    | {
        // api_version, pages
        [key: string]: {
          // chart?, common, mesh, status
          [key: string]: Object
        }
      }
}

export class NodeBacnendServices implements BackendServices {
  private dataHelperServices = new DataHelperServices()

  clearResources(): void {
    this.dataHelperServices.clearResources()
  }

  loadResources(nodeName: string, requiredResources: NodeDataEnum[]): void {
    const appStore = useAppStore()

    const rb: { [key: string]: string[] } = {}
    requiredResources.forEach((r) => {
      const endPoint = resourceList[r]
      if (!r) {
        throw 'unknown node data resource: ' + r
      }

      rb[endPoint] = rb[endPoint] ? [...rb[endPoint], r] : [r]
    })

    // Check if any resources need to be loaded
    if (Object.keys(rb).length === 0) {
      console.log(
        'resources ' + requiredResources.join(',') + ' already loaded'
      )
      return
    }

    const qs = Object.entries(rb)
      .map(([k, v]) => k + '=' + v.join(','))
      .join('&')
    const url =
      scheme + nodeName + nodeDomainName + nodePort + '/cgi-bin/api?' + qs
    console.log('loading resources:' + url)

    appStore.setLoading(true)
    axios
      .get<ApiData>(url)
      .then(({ data }) => {
        appStore.setLoading(false)

        Object.entries(data.pages).forEach(([k, v]) => {
          console.log('key: ' + k + ': ', v)

          Object.entries(v).forEach((x) => {
            const r = NodeDataEnumUrils.fromString(x[0])
            this.dataHelperServices.saveResources(r, x[1] as Object)
          })
        })
      })
      .catch((error) => {
        appStore.setLoading(false)
        appStore.setError(error)
      })
  }
}
