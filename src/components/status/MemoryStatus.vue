<template>
  <v-card outlined height="100%">
    <v-card-title class="primary">
      <v-row>
        <v-col cols="12" class="white--text">
          <v-icon
            v-if="showContent"
            @click.stop="toggleContent"
            class="white--text mb-1"
          >
            mdi-arrow-down-drop-circle
          </v-icon>
          <v-icon v-else @click.stop="toggleContent" class="white--text mb-1">
            mdi-arrow-up-drop-circle
          </v-icon>
          Memory
        </v-col>
      </v-row>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text v-show="showContent" class="pt-3">
        <v-row>
          <v-col cols="6">
            <span class="font-weight-bold">Total RAM:</span>
          </v-col>
          <v-col cols="6"> {{ totalram }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Free RAM:</span>
          </v-col>
          <v-col cols="6">
            {{ freeram }} KB
            <v-progress-linear v-model="freerampctfree" />
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Shared RAM:</span>
          </v-col>
          <v-col cols="6"> {{ sharedram }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Buffer RAM:</span>
          </v-col>
          <v-col cols="6"> {{ bufferram }} KB </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { computed,  defineComponent, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import useToggleContent from '@/use/toggleContent'
import { useMemoryStore } from '@/stores/MemoryStore'

export default defineComponent({
  name: 'MemoryStatus',
  setup() {
    const memoryStore = useMemoryStore()
    const { freeram, totalram, sharedram, bufferram } = storeToRefs(memoryStore)

    const freerampctfree = computed(() => {
      return ((freeram.value / totalram.value) * 100).toFixed(3)
    })

    onMounted(() => memoryStore.addMemoryResource())
    onUnmounted(() => memoryStore.removeMemoryResource())

    return {
      freeram,
      totalram,
      sharedram,
      bufferram,
      ...useToggleContent(),
      freerampctfree,
    }
  },
})
</script>
