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
import { computed, defineComponent } from "vue";
import { useAppStore } from "@/stores/AppStore";
import { useNodeStore } from "../../stores/NodeStore";

export default defineComponent({
  name: "AlertPanelSemiComponentModel",
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
  setup(props) {
    const appStore = useAppStore();
    const nodeStore = useNodeStore();

    const alerts = nodeStore.alerts;
    const seenAlerts = appStore.seenAlerts;
    const setSeenAlert = appStore.setSeenAlert;

    const showAlert = computed((): boolean => {
      if (alerts[props.type] && seenAlerts[props.type]) {
        return seenAlerts[props.type] !== alerts[props.type];
      }
      return !!alerts[props.type];
    });

    function clearAlert() {
      setSeenAlert(props.type, alerts[props.type]);
    }

    const message = computed((): string => {
      if (alerts[props.type]) {
        return alerts[props.type];
      }
      return "";
    });

    return {
      alerts,
      clearAlert,
      message,
      showAlert,
    };
  },
});
</script>
