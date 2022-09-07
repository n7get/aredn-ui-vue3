import { NodeDataEnum } from '@/types'

export default {
  fromString: (s: string): NodeDataEnum => {
    switch (s) {
      case 'alerts':
        return NodeDataEnum.alerts
      case 'ip':
        return NodeDataEnum.ip
      case 'location':
        return NodeDataEnum.location
      case 'memory':
        return NodeDataEnum.memory
      case 'meshrf':
        return NodeDataEnum.meshrf
      case 'olsr':
        return NodeDataEnum.olsr
      case 'storage':
        return NodeDataEnum.storage
      case 'sysinfo':
        return NodeDataEnum.sysinfo
    }
    throw new Error('Unknown resource type: ' + s)
  },
}
