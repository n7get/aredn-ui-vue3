<template>
  <v-app>
    <v-main>
      <app-header></app-header>
      <alert-panel title="Aredn" type="aredn" />
      <alert-panel title="Local" type="local" />
      <router-view />
      <system-settings></system-settings>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AlertPanel from "@/components/common/AlertPanelSemiComponentModel.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import SystemSettings from "@/components/settings/SystemSettings.vue";
</script>
