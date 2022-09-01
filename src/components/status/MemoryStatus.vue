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
          <v-col cols="6"> {{ memory.totalram }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Free RAM:</span>
          </v-col>
          <v-col cols="6">
            {{ memory.freeram }} KB
            <v-progress-linear v-model="freerampctfree" />
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Shared RAM:</span>
          </v-col>
          <v-col cols="6"> {{ memory.sharedram }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Buffer RAM:</span>
          </v-col>
          <v-col cols="6"> {{ memory.bufferram }} KB </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNodeStore } from '@/stores/NodeStore'
import useToggleContent from '@/use/toggleContent'
import { computed } from '@vue/reactivity'

export default defineComponent({
  name: 'MemoryStatus',
  setup() {
    const nodeStore = useNodeStore()
    const memory = nodeStore.memory

    const freerampctfree = computed(() => {
      return ((memory.freeram / memory.totalram) * 100).toFixed(3)
    })

    return {
      ...useToggleContent(),
      freerampctfree,
      memory,
    }
  },
})
</script>
