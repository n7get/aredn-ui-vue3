<template>
  <div>
    <v-app-bar :clipped-left="clipped" flat fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-app-bar-title v-text="nodeName" />
      <v-spacer />
      <v-col cols="4" sm="2" align="right">
        <v-icon v-show="hasSeenAlerts" @click="clearSeenAlerts()" class="mr-2">
          mdi-alert-circle
        </v-icon>
        <v-icon @click="emitRefresh">mdi-refresh</v-icon>
      </v-col>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      app
    >
      <!--
      <v-list :items="menu"></v-list>
      -->
      <v-list flat>
        <v-list-item title="Status" value="/" />

        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>Nodde</v-list-item-title>
          </template>
          <v-list-item title="Neighbors" value="/" />
          <v-list-item title="Favorites" value="/" />
          <v-list-item title="All Noddes" value="/" />
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Networking</v-list-item-title>
          </template>
          <v-list-item title="Mesh" value="/" />
          <v-list-item title="LAN" value="/" />
          <v-list-item title="WAN" value="/" />
          <v-list-item title="WiFi Scan" value="/" />
        </v-list-group>

        <v-list-item value="/">
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Services</v-list-item-title>
          </template>
          <v-list-item title="My Services" value="/" />
          <v-list-item title="Favorites" value="/" />
          <v-list-item title="All Services" value="/" />
        </v-list-group>

        <v-list-item value="/">
          <v-list-item-title>Tuning</v-list-item-title>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>System</v-list-item-title>
          </template>
          <v-list-item title="General" value="/" />
          <v-list-item title="Firmware Update" value="/" />
          <v-list-item title="Package Management" value="/" />
          <v-list-item title="SSH Keys" value="/" />
          <v-list-item value="/">
            <v-list-item-title>Time</v-list-item-title>
          </v-list-item>
          <v-list-item title="Advanced Configuration" value="/"> </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { useAppStore } from "@/stores/AppStore";
import { defineComponent } from "vue";

export default defineComponent({
  setup: () => {
    const appStore = useAppStore();

    return {
      nodeName: appStore.nodeName,

      seenAlerts: appStore.seenAlerts,
      clearSeenAlerts: appStore.clearSeenAlerts,
    };
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      miniVariant: false,
    };
  },
  methods: {
    emitRefresh() {
      // $nuxt.$emit("refresh-node")
    },
  },
  computed: {
    hasSeenAlerts() {
      return !!this.seenAlerts.aredn || !!this.seenAlerts.local;
    },
  },
});
</script>
