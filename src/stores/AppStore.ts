import { Ialerts } from "@/models/Ialert";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useNodeStore } from "./NodeStore";

export const useAppStore = defineStore("AppStore", () => {
  const nodeStore = useNodeStore();

  const hasApiMismatch = ref(false);
  const legacyUrl = ref("");
  const seenAlerts = ref({} as Ialerts);

  const nodeName = computed(() => nodeStore.sysinfo.node);

  function clearSeenAlerts() {
    seenAlerts.value["aredn"] = "";
    seenAlerts.value["local"] = "";
  }
  function setSeenAlert(alert: string, value: string) {
    seenAlerts.value[alert] = value;
  }

  function setApiMismatch(value: boolean) {
    hasApiMismatch.value = value;
  }

  return {
    hasApiMismatch,
    legacyUrl,
    seenAlerts,
    nodeName,
    clearSeenAlerts,
    setSeenAlert,
    setApiMismatch,
  };
});
