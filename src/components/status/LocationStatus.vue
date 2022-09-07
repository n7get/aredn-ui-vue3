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
          Location
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
            <span class="font-weight-bold">Latitude:</span>
          </v-col>
          <v-col cols="6">
            {{ lat === '' ? 'Not set' : lat }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Longitude:</span>
          </v-col>
          <v-col cols="6">
            {{ lon === '' ? 'Not set' : lon }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Grid Square:</span>
          </v-col>
          <v-col cols="6">
            {{ gridsquare === '' ? 'Not set' : gridsquare }}
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
import { useLocationStore } from '@/stores/LocationStore'

export default defineComponent({
  name: 'LocationStatus',
  setup() {
    const locationStore = useLocationStore()
    const { lon, lat, gridsquare } = storeToRefs(locationStore)

    const { openSettings } = useOpenSettings(SettingDialogsEnum.location)

    onMounted(() => locationStore.addLocationResource())
    onUnmounted(() => locationStore.removeLocationResource())

    return {
      lon,
      lat,
      gridsquare,
      ...useToggleContent(),
      openSettings,
    }
  },
})
</script>
