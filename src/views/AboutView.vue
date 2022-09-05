<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useAppStore } from '@/stores/AppStore'

const { loadNodeData } = useAppStore()

onMounted(() => {
  loadNodeData()
})
</script>
