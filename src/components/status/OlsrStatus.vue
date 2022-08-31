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
          OLSR
        </v-col>
      </v-row>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text v-show="showContent" class="pt-3">
        <v-row>
          <v-col cols="6">
            <span class="font-weight-bold">OLSR Entries:</span>
          </v-col>
          <v-col cols="6">
            {{ olsr.entries }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">OLSR Nodes:</span>
          </v-col>
          <v-col cols="6">
            {{ olsr.nodes }}
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
  name: 'OlsrStatus',
  setup: () => {
    const nodeStore = useNodeStore()

    return { olsr: nodeStore.olsr }
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
})
</script>
