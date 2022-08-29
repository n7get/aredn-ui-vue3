import { defineStore } from "pinia";

export const useSessionStore = defineStore("SessionStore", {
  state: () => {
    return {
        seenAlerts: {
            aredn: '',
            local: '',
            },
    };
  },
});
