<script setup>
import {ref} from 'vue';

const loading = ref(false);

function startLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="flex items-center gap-4 p-4 bg-gray-100 rounded shadow">
    <button
        @click="startLoading"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      LOAD 2
    </button>
    <span v-if="loading" class="text-sm text-gray-600 animate-pulse">
      Loading...
    </span>
  </div>
</template>