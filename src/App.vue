<template>
  <v-app>
    <v-main>
      <app-header></app-header>
      <alert-panel title="Aredn" type="aredn" />
      <alert-panel title="Local" type="local" />
      <router-view />
      <error-popup />
      <loading-popup />
      <ip-addresses-settings></ip-addresses-settings>
      <location-settings></location-settings>
      <mesh-rf-settings></mesh-rf-settings>
      <system-settings></system-settings>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import AlertPanel from '@/components/common/AlertPanelSemiComponentModel.vue'
  import AppHeader from '@/components/common/AppHeader.vue'
  import ErrorPopup from '@/components/common/ErrorPopup.vue'
  import LoadingPopup from '@/components/common/LoadingPopup.vue'
  import IpAddressesSettings from '@/components/settings/IpAddressesSettings.vue'
  import LocationSettings from '@/components/settings/LocationSettings.vue'
  import MeshRfSettings from '@/components/settings/MeshRfSettings.vue'
  import SystemSettings from '@/components/settings/SystemSettings.vue'
</script>
