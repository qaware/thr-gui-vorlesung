<script setup>
import {useAppStore} from "@/stores/useAppStore.js";

const app = useAppStore()

function startLoading() {
  app.setLoading(true)
  setTimeout(() => {
    app.setLoading(false)
  }, 2000)
}
</script>

<template>
  <div class="flex items-center gap-4 p-4 bg-green-100 rounded shadow">
    <button
        @click="startLoading"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      LOAD 2
    </button>
    <span v-if="app.loading" class="text-sm text-green-700 animate-pulse">
      Loading...
    </span>
  </div>
</template>