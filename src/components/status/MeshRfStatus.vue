<template>
  <v-card outlined height="100%">
    <v-card-title class="primary">
      <v-row>
        <v-col cols="10" class="white--text">
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
          Mesh RF
        </v-col>
        <v-col cols="2" align="right">
          <v-icon @click.stop="openSettings" class="white--text">
            mdi-cog
          </v-icon>
        </v-col>
      </v-row>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text v-show="showContent" class="pt-3">
        <v-row>
          <v-col cols="6">
            <span class="font-weight-bold">SSID:</span>
          </v-col>
          <v-col cols="6">
            {{ ssid === undefined ? 'Disabled' : ssid }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Channel:</span>
          </v-col>
          <v-col cols="6">
            {{ channel === undefined ? 'Disabled' : channel }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Bandwidth (MHz):</span>
          </v-col>
          <v-col cols="6">
            {{ chanbw === undefined ? 'Disabled' : chanbw }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Frequency (MHz):</span>
          </v-col>
          <v-col cols="6">
            {{ frequency === undefined ? 'Disabled' : frequency }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { SettingDialogsEnum } from '@/types'
import useOpenSettings from '@/use/openSettings'
import useToggleContent from '@/use/toggleContent'
import { useMeshrfStore } from '@/stores/MeshrfStore'

export default defineComponent({
  name: 'MeshRfStatus',
  setup() {
    const meshrfStore = useMeshrfStore()
    const { band, ssid, channel, device, chanbw, frequency } =
      storeToRefs(meshrfStore)

    const { openSettings } = useOpenSettings(SettingDialogsEnum.mesh)

    onMounted(() => meshrfStore.addMeshrfResource())
    onUnmounted(() => meshrfStore.removeMeshrfResource())

    return {
      band,
      ssid,
      channel,
      device,
      chanbw,
      frequency,
      ...useToggleContent(),
      openSettings,
    }
  },
})
</script>
