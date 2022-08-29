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
            {{ ip.wifi === "" ? "Disabled" : ip.wifi }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">LAN:</span>
          </v-col>
          <v-col cols="6">
            {{ ip.lan }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">WAN:</span>
          </v-col>
          <v-col cols="6">
            {{ ip.wan === "" ? "n/a" : ip.wan }}
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Gateway:</span>
          </v-col>
          <v-col cols="6">
            {{ ip.gateway }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNodeStore } from "../../stores/NodeStore";

export default defineComponent({
  name: "IpAddressStatus",
  setup: () => {
    const nodeStore = useNodeStore();

    return { ip: nodeStore.ip };
  },
  data() {
    return {
      showContent: true,
    };
  },
  methods: {
    toggleContent() {
      // $event.target.blur()
      this.showContent = !this.showContent;
    },
    openSettings() {
      //   $nuxt.$emit("show-ipaddresses-setup")
    },
  },
});
</script>
