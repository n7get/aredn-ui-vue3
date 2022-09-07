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
          Performance
        </v-col>
      </v-row>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text v-show="showContent" class="pt-3">
        <v-row>
          <v-col cols="6">
            <span class="font-weight-bold">Uptime:</span>
          </v-col>
          <v-col cols="6">
            {{ uptime }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Load (1m):</span>
          </v-col>
          <v-col cols="6">
            {{ loads ? loads[0] : 'N/A' }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Load (5m):</span>
          </v-col>
          <v-col cols="6">
            {{ loads ? loads[1] : 'N/A' }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Load (15m):</span>
          </v-col>
          <v-col cols="6">
            {{ loads ? loads[2] : 'N/A' }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import useToggleContent from '@/use/toggleContent'
import { useSysinfoStore } from '@/stores/SysinfoStore'

export default defineComponent({
  name: 'PerformanceStatus',
  setup() {
    const sysinfoStore = useSysinfoStore()
    const { uptime, loads } = storeToRefs(sysinfoStore)

    onMounted(() => sysinfoStore.addSysinfoResource())
    onUnmounted(() => sysinfoStore.removeSysinfoResource())

    return {
      uptime,
      loads,
      ...useToggleContent(),
    }
  },
})
</script>
