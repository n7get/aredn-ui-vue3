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
import { useNodeStore } from '../../stores/NodeStore'

export default defineComponent({
  name: 'FilesystemStatus',
  setup: () => {
    const nodeStore = useNodeStore()

    return { storage: nodeStore.storage }
  },
  data() {
    return {
      showContent: true,
    }
  },
  methods: {
    toggleContent() {
      // $event.target.blur()
      this.showContent = !this.showContent
    },
  },
  computed: {
    rootpctfree() {
      // eslint-disable-next-line prettier/prettier
      return ((this.storage.rootfree / this.storage.roottotal) * 100).toFixed(3);
    },
    tmppctfree() {
      return ((this.storage.tmpfree / this.storage.tmptotal) * 100).toFixed(3)
    },
  },
})
</script>
