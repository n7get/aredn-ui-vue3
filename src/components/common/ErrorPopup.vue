<template>
  <v-dialog persistent v-model="hasError" max-width="400">
    <v-card>
      <v-card-title>
        <h2>Error</h2>
      </v-card-title>
      <v-card-text>
        An error has occured: <b>{{ errorMessage }}</b>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn small right @click="clearError()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
//import { mapActions, mapGetters } from "vuex"
import { useAppStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorPopup',
  setup() {
    const appstore = useAppStore()
    const { hasError, errorMessage } = storeToRefs(appstore)

    return {
      hasError,
      errorMessage,
      clearError: appstore.clearError,
    }
  },
})
</script>
