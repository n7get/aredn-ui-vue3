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
          IP Addresses
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
            <span class="font-weight-bold">RF:</span>
          </v-col>
          <v-col cols="6">
            {{ wifi === '' ? 'Disabled' : wifi }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">LAN:</span>
          </v-col>
          <v-col cols="6">
            {{ lan }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">WAN:</span>
          </v-col>
          <v-col cols="6">
            {{ wan === '' ? 'n/a' : wan }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Gateway:</span>
          </v-col>
          <v-col cols="6">
            {{ gateway }}
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
import { useIpStore } from '@/stores/IpStore'

export default defineComponent({
  name: 'IpAddressStatus',
  setup() {
    const ipStore = useIpStore()
    const { wifi, wan, gateway, lan } = storeToRefs(ipStore)

    const { openSettings } = useOpenSettings(SettingDialogsEnum.ipaddresses)

    onMounted(() => ipStore.addIpResource())
    onUnmounted(() => ipStore.removeIpResource())

    return {
      wifi,
      wan,
      gateway,
      lan,
      ...useToggleContent(),
      openSettings,
    }
  },
})
</script>
