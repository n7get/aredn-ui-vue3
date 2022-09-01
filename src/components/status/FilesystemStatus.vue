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
          Filesystem
        </v-col>
      </v-row>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text v-show="showContent" class="pt-3">
        <v-row>
          <v-col cols="6">
            <span class="font-weight-bold">Total space in /:</span>
          </v-col>
          <v-col cols="6"> {{ storage.roottotal }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Freespace in /:</span>
          </v-col>
          <v-col cols="6">
            {{ storage.rootfree }} KB
            <v-progress-linear v-model="rootpctfree" />
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Total space in /tmp:</span>
          </v-col>
          <v-col cols="6"> {{ storage.tmptotal }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Freespace in /tmp:</span>
          </v-col>
          <v-col cols="6">
            {{ storage.tmpfree }} KB
            <v-progress-linear v-model="tmppctfree" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed } from '@vue/reactivity'
import { useNodeStore } from '@/stores/NodeStore'
import useToggleContent from '@/use/toggleContent'
import emitter from '@/services/emitter'

export default defineComponent({
  name: 'FilesystemStatus',
  setup() {
    const nodeStore = useNodeStore()
    const storage = nodeStore.storage

    function openSettings() {
      // $nuxt.$emit("show-system-setup")
      emitter.emit('open-system-settings')
    }

    const rootpctfree = computed(() => {
      // eslint-disable-next-line prettier/prettier
      return ((storage.rootfree / storage.roottotal) * 100).toFixed(3)
    })
    const tmppctfree = computed(() => {
      return ((storage.tmpfree / storage.tmptotal) * 100).toFixed(3)
    })

    return {
      ...useToggleContent(),
      openSettings,
      rootpctfree,
      tmppctfree,
      storage,
    }
  },
})
</script>
