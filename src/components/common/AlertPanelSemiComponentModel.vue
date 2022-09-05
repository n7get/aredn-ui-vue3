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
import { computed, defineComponent, onMounted, onUnmounted } from 'vue'
import { useAlertStore } from '@/stores/AlertsStore'
import { useSessionStore } from '@/stores/SessionStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'AlertPanelSemiComponentModel',
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
    const sessionStore = useSessionStore()
    const alertStore = useAlertStore()

    const { alerts } = storeToRefs(alertStore)
    const seenAlerts = sessionStore.seenAlerts
    const setSeenAlert = sessionStore.setSeenAlert

    const showAlert = computed((): boolean => {
      if (alerts.value[props.type] && seenAlerts[props.type]) {
        return seenAlerts[props.type] !== alerts.value[props.type]
      }
      return !!alerts.value[props.type]
    })

    function clearAlert() {
      setSeenAlert(props.type, alerts.value[props.type])
    }

    const message = computed((): string => {
      if (alerts.value[props.type]) {
        return alerts.value[props.type]
      }
      return ''
    })

    onMounted(() => alertStore.addAlertsResource())
    onUnmounted(() => alertStore.removeAlertsResource())

    return {
      alerts,
      clearAlert,
      message,
      showAlert,
    }
  },
})
</script>
