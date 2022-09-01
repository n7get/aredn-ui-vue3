import { ref } from 'vue'
import emitter from '@/services/emitter'
import { SettingDialogs } from '@/types'

export default function useOpenSettings(event: SettingDialogs) {
  const showDialog = ref(false)

  function openSettings() {
    emitter.emit(event)
  }

  function closeSettings() {
    showDialog.value = false
  }

  function onOpenSettings() {
    emitter.on(event, () => (showDialog.value = true))
  }

  return {
    showDialog,
    openSettings,
    closeSettings,
    onOpenSettings,
  }
}
