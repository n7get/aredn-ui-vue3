import { NodeDataEnum } from '@/types'

export interface BackendServices {
  clearResources(): void
  loadResources(nodeName: string, requiredResources: NodeDataEnum[]): void
}
