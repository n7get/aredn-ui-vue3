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

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useNodeStore } from "../../stores/NodeStore";
import { useSessionStore } from "@/stores/SessionStore";

const props = defineProps<{
  title: string;
  type: string;
}>();

const sessionStore = useSessionStore();
const nodeStore = useNodeStore();

const { alerts } = storeToRefs(nodeStore);
const { seenAlerts } = storeToRefs(sessionStore);
const setSeenAlert = sessionStore.setSeenAlert;

const showAlert = computed((): boolean => {
  if (alerts.value[props.type] && seenAlerts.value[props.type]) {
    return seenAlerts.value[props.type] !== alerts.value[props.type];
  }
  return !!alerts.value[props.type];
});

function clearAlert() {
  setSeenAlert(props.type, alerts.value[props.type]);
}

const message = computed((): string => {
  if (alerts.value[props.type]) {
    return alerts.value[props.type];
  }
  return "";
});
</script>
