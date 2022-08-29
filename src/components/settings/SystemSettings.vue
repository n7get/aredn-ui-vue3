<template>
  <v-dialog v-model="showDialog" max-width="400">
    <v-card>
      <v-card-title>
        <h2>System settings</h2>
      </v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn small right class="warning" @click="save">Save</v-btn>
        <v-btn small right class="error" @click="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import emitter from "@/services/emitter";

export default defineComponent({
  name: "SystemSettings",
  setup() {
    const showDialog = ref(false);

    function cancel() {
      showDialog.value = !showDialog.value;
    }

    function save() {
      showDialog.value = !showDialog.value;
    }

    emitter.on("open-system-settings", () => (showDialog.value = true));

    return {
      cancel,
      save,
      showDialog,
    };
  },
});
</script>
