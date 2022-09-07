<template>
  <div>
    <v-row>
      <v-col cols="12">
        <SystemStatus></SystemStatus>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6"><IpAddressStatus /></v-col>
      <v-col cols="12" sm="6"><MeshRfStatus /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6"><LocationStatus /></v-col>
      <v-col cols="12" sm="6"><OlsrStatus /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4"><FilesystemStatus /></v-col>
      <v-col cols="12" sm="6" md="4"><PerformanceStatus /></v-col>
      <v-col cols="12" sm="6" md="4"><MemoryStatus /></v-col>
    </v-row>

    <!-- <v-row>
      <v-spacer></v-spacer>
    </v-row> -->
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useAppStore } from '@/stores/AppStore'

import FilesystemStatus from '@/components/status/FilesystemStatus.vue'
import IpAddressStatus from '@/components/status/IpAddressStatus.vue'
import LocationStatus from '@/components/status/LocationStatus.vue'
import MemoryStatus from '@/components/status/MemoryStatus.vue'
import MeshRfStatus from '@/components/status/MeshRfStatus.vue'
import OlsrStatus from '@/components/status/OlsrStatus.vue'
import PerformanceStatus from '@/components/status/PerformanceStatus.vue'
import SystemStatus from '@/components/status/SystemStatus.vue'

onMounted(() => useAppStore().loadNodeData())
</script>
