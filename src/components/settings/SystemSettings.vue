<template>
  <v-dialog v-model="showDialog" max-width="400">
    <v-card>
      <v-card-title>
        <h2>System settings</h2>
      </v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn small right class="warning" @click="save">Save</v-btn>
        <v-btn small right class="error" @click="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SettingDialogsEnum } from '@/types'
import useOpenSettings from '@/use/openSettings'

export default defineComponent({
  name: 'SystemSettings',
  setup() {
    const { closeSettings, onOpenSettings, showDialog } = useOpenSettings(
      SettingDialogsEnum.system
    )

    function cancel() {
      closeSettings()
    }

    function save() {
      closeSettings()
    }

    onOpenSettings()

    return {
      cancel,
      save,
      showDialog,
    }
  },
})
</script>
