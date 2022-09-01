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
          System
        </v-col>
        <v-col cols="2" align="right">
          <v-icon @click.stop="openSettings()" class="white--text">
            mdi-cog
          </v-icon>
        </v-col>
      </v-row>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text v-show="showContent" class="pt-3">
        <v-row>
          <v-col cols="12" sm="3" md="2" class="pb-0 pb-sm-3">
            <span class="font-weight-bold">Description:</span>
          </v-col>
          <v-col
            cols="11"
            offset="1"
            sm="7"
            offset-sm="0"
            md="4"
            class="pt-0 pt-sm-3"
          >
            {{
              sysinfo.description === undefined ? 'N/A' : sysinfo.description
            }}
          </v-col>

          <v-col cols="12" sm="3" md="2" class="pb-0 pb-sm-3">
            <span class="font-weight-bold">Node Date/time:</span>
          </v-col>
          <v-col
            cols="11"
            offset="1"
            sm="7"
            offset-sm="0"
            md="4"
            class="pt-0 pt-sm-3"
          >
            {{ sysinfo.date }} {{ sysinfo.time }}
          </v-col>

          <v-col cols="12" sm="3" md="2" class="pb-0 pb-sm-3">
            <span class="font-weight-bold">Model:</span>
          </v-col>
          <v-col
            cols="11"
            offset="1"
            sm="7"
            offset-sm="0"
            md="4"
            class="pt-0 pt-sm-3"
          >
            {{ sysinfo.model === undefined ? 'N/A' : sysinfo.model }}
          </v-col>

          <v-col cols="12" sm="3" md="2" class="pb-0 pb-sm-3">
            <span class="font-weight-bold">Target Type:</span>
          </v-col>
          <v-col
            cols="11"
            offset="1"
            sm="7"
            offset-sm="0"
            md="4"
            class="pt-0 pt-sm-3"
          >
            {{
              sysinfo.target_type === undefined ? 'N/A' : sysinfo.target_type
            }}
          </v-col>

          <v-col cols="12" sm="3" md="2" class="pb-0 pb-sm-3">
            <span class="font-weight-bold">Firmware Version:</span>
          </v-col>
          <v-col
            cols="11"
            offset="1"
            sm="7"
            offset-sm="0"
            md="4"
            class="pt-0 pt-sm-3"
          >
            {{
              sysinfo.firmware_version === undefined
                ? 'N/A'
                : sysinfo.firmware_version
            }}
          </v-col>

          <v-col cols="12" sm="3" md="2" class="pb-0 pb-sm-3">
            <span class="font-weight-bold">API Version:</span>
          </v-col>
          <v-col
            cols="11"
            offset="1"
            sm="7"
            offset-sm="0"
            md="4"
            class="pt-0 pt-sm-3"
          >
            {{
              sysinfo.api_version === undefined ? 'N/A' : sysinfo.api_version
            }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNodeStore } from '@/stores/NodeStore'
import useToggleContent from '@/use/toggleContent'
import useOpenSettings from '@/use/openSettings'
import { SettingDialogs } from '@/types'

export default defineComponent({
  name: 'SystemStatus',
  setup() {
    const nodeStore = useNodeStore()

    const { openSettings } = useOpenSettings(SettingDialogs.system)

    return {
      ...useToggleContent(),
      openSettings,
      sysinfo: nodeStore.sysinfo,
    }
  },
})
</script>
