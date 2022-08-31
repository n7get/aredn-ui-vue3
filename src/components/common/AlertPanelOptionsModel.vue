<template>
  <v-card v-show="showAlert" class="yellow mb-1 mb-sm-3" light>
    <v-card-title>
      <v-row>
        <v-col cols="10">{{ title }} Alert</v-col>
        <v-col cols="2" align="right">
          <v-icon @click.stop="clearAlert"> mdi-close </v-icon>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text v-html="message" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useNodeStore } from "../../stores/NodeStore";
import { useSessionStore } from "@/stores/SessionStore";

export default defineComponent({
  name: "AlertPanelOptionsModel",
  setup() {
    const nodeStore = useNodeStore();
    const sessionStore = useSessionStore();

    const { alerts } = storeToRefs(nodeStore);
    const { seenAlerts } = storeToRefs(sessionStore);

    const setSeenAlert = sessionStore.setSeenAlert;

    return {
      alerts,
      seenAlerts,
      setSeenAlert,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    clearAlert() {
      this.setSeenAlert(this.type, this.alerts[this.type]);
    },
  },
  computed: {
    message(): string {
      if (this.alerts[this.type]) {
        return this.alerts[this.type];
      }
      return "";
    },
    showAlert(): boolean {
      if (this.alerts[this.type] && this.seenAlerts[this.type]) {
        return this.seenAlerts[this.type] !== this.alerts[this.type];
      }
      return !!this.alerts[this.type];
    },
  },
});
</script>
