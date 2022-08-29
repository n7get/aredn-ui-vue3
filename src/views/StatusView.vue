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

<script lang="ts">
import { defineComponent } from "vue";
// import { mapState } from "pinia";
// import { useAppStore } from "../../stores/AppStore";
// import { useNodeStore } from "../../stores/NodeStore";

import FilesystemStatus from "../components/status/FilesystemStatus.vue";
import IpAddressStatus from "../components/status/IpAddressStatus.vue";
import LocationStatus from "../components/status/LocationStatus.vue";
import MemoryStatus from "../components/status/MemoryStatus.vue";
import MeshRfStatus from "../components/status/MeshRfStatus.vue";
import OlsrStatus from "../components/status/OlsrStatus.vue";
import PerformanceStatus from "../components/status/PerformanceStatus.vue";
import SystemStatus from "../components/status/SystemStatus.vue";

export default defineComponent({
  name: "StatusView",
  components: {
    FilesystemStatus,
    IpAddressStatus,
    LocationStatus,
    MemoryStatus,
    MeshRfStatus,
    OlsrStatus,
    PerformanceStatus,
    SystemStatus,
  },
  // head() {
  //   return {
  //     title: this.nodeName + ' [' + this.$options.name + ']',
  //   };
  // },
  methods: {
    // ...mapActions(['expireResources', 'loadResources', 'pageResources']),
  },
  computed: {
    // ...mapGetters(['nodeName']),
  },
  // created() {
  //   const resources = [
  //     'ip',
  //     'MeshRF',
  //     'location',
  //     'sysinfo',
  //     'olsr',
  //     'storage',
  //     'memory',
  //   ]

  //   this.$nuxt.$on('refresh-node', () => {
  //     this.expireResources(resources)
  //     this.loadResources()
  //   })

  //   this.pageResources(resources)
  // },
  // mounted() {
  //   this.loadResources()
  // },
});
</script>
