<template>
  <v-dialog v-model="loading" hide-overlay persistent width="300">
    <v-card color="primary">
      <v-card-text>
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingPopup',
  setup() {
    const appStore = useAppStore()
    const { loading } = storeToRefs(appStore)

    return { loading }
  },
})
</script>
