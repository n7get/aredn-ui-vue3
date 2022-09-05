<template>
  <v-card outlined height="100%">
    <v-card-title class="primary">
      <v-row>
        <v-col cols="12" class="white--text">
          <v-icon
            v-if="showContent"
            @click.stop="toggleContent"
            class="white--text mb-1"
          >
            mdi-arrow-down-drop-circle
          </v-icon>
          <v-icon v-else @click.stop="toggleContent" class="white--text mb-1">
            mdi-arrow-up-drop-circle
          </v-icon>
          Filesystem
        </v-col>
      </v-row>
    </v-card-title>

    <v-slide-y-transition>
      <v-card-text v-show="showContent" class="pt-3">
        <v-row>
          <v-col cols="6">
            <span class="font-weight-bold">Total space in /:</span>
          </v-col>
          <v-col cols="6"> {{ roottotal }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Freespace in /:</span>
          </v-col>
          <v-col cols="6">
            {{ rootfree }} KB
            <v-progress-linear v-model="rootpctfree" />
          </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Total space in /tmp:</span>
          </v-col>
          <v-col cols="6"> {{ tmptotal }} KB </v-col>

          <v-col cols="6">
            <span class="font-weight-bold">Freespace in /tmp:</span>
          </v-col>
          <v-col cols="6">
            {{ tmpfree }} KB
            <v-progress-linear v-model="tmppctfree" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script lang="ts">
import { computed,  defineComponent, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import useToggleContent from '@/use/toggleContent'
import { useStorageStore } from '@/stores/StorageStore'

export default defineComponent({
  name: 'FilesystemStatus',
  setup() {
    const storageStore = useStorageStore()
    const { rootfree, tmptotal, roottotal, tmpfree } = storeToRefs(storageStore)

    const rootpctfree = computed(() => {
      return ((rootfree.value / roottotal.value) * 100).toFixed(3)
    })
    const tmppctfree = computed(() => {
      return ((tmpfree.value / tmptotal.value) * 100).toFixed(3)
    })

    onMounted(() => storageStore.addStorageResource())
    onUnmounted(() => storageStore.removeStorageResource())

    return {
      rootfree,
      tmptotal,
      roottotal,
      tmpfree,
      ...useToggleContent(),
      rootpctfree,
      tmppctfree,
    }
  },
})
</script>
