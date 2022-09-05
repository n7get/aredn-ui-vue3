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
              description === undefined ? 'N/A' : description
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
            {{ date }} {{ time }}
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
            {{ model === undefined ? 'N/A' : model }}
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
              target_type === undefined ? 'N/A' : target_type
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
              firmware_version === undefined
                ? 'N/A'
                : firmware_version
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
              api_version === undefined ? 'N/A' : api_version
            }}
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
import { useSysinfoStore } from '@/stores/SysinfoStore'

export default defineComponent({
  name: 'SystemStatus',
  setup() {
    const sysinfoStore = useSysinfoStore()
      const {
        description,
        date,
        api_version,
        target_type,
        time,
        model,
        firmware_version 
      } = storeToRefs(sysinfoStore)

    const { openSettings } = useOpenSettings(SettingDialogsEnum.system)

    onMounted(() => sysinfoStore.addSysinfoResource())
    onUnmounted(() => sysinfoStore.removeSysinfoResource())

    return {
      description,
      date,
      api_version,
      target_type,
      time,
      model,
      firmware_version,
      ...useToggleContent(),
      openSettings,
    }
  },
})
</script>
