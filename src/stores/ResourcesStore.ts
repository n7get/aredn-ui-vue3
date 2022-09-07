import { defineStore } from 'pinia'
import { NodeDataEnum } from '@/types'

const requriedResources = new Map<NodeDataEnum, number>()

export const useResourcesStore = defineStore('ResourcesStore', () => {
  function addResource(resourceName: NodeDataEnum) {
    const count = requriedResources?.get(resourceName) ?? 0
    requriedResources.set(resourceName, count + 1)
  }

  function removeResource(resourceName: NodeDataEnum) {
    const count = requriedResources.get(resourceName)

    if (count === undefined) {
      throw new Error(`resource ${resourceName} does not exist`)
    }
    if (count === 0) {
      throw new Error(`reference count for ${resourceName} is 0`)
    }

    requriedResources.set(resourceName, count - 1)
  }

  function getRequiredResources(globalResources: NodeDataEnum[]) {
    const result = Array.from(requriedResources)
      .filter((rr) => rr[1] != 0)
      .map((rr) => rr[0])

    globalResources.forEach((r) => {
      if (!result.find((rr) => r === rr)) {
        result.push(r)
      }
    })

    return result
  }

  return {
    addResource,
    removeResource,
    getRequiredResources,
  }
})
