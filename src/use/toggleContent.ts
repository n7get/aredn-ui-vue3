import { ref } from 'vue'

export default function useToggleContent() {
  const showContent = ref(true)

  function toggleContent() {
    // $event.target.blur();
    showContent.value = !showContent.value
  }

  return {
    showContent,
    toggleContent,
  }
}
