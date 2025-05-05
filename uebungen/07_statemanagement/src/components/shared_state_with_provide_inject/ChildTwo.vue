<script setup>
import {inject} from "vue";

const loading = inject('loading')

function startLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="flex items-center gap-4 p-4 bg-purple-100 rounded shadow">
    <button
        @click="startLoading"
        class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
    >
      LOAD 2
    </button>
    <span v-if="loading" class="text-sm text-purple-700 animate-pulse">
      Loading...
    </span>
  </div>
</template>
