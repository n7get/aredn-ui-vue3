import { defineStore } from "pinia";
import { useSessionStorage } from "@vueuse/core";
import { Ialerts } from "@/models/Ialert";

export const useSessionStore = defineStore("SessionStore", () => {
  const seenAlerts = useSessionStorage("aredn/seenAlerts", {} as Ialerts);

  function clearSeenAlerts() {
    seenAlerts.value["aredn"] = "";
    seenAlerts.value["local"] = "";
  }
  function setSeenAlert(alert: string, value: string) {
    seenAlerts.value[alert] = value;
  }

  return {
    seenAlerts,
    clearSeenAlerts,
    setSeenAlert,
  };
});
