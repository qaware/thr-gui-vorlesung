<script setup>
defineProps({
  loading: {type: Boolean, default: false},
  startLoading: {
    type: Function, default: () => {
    }
  },
})
</script>

<template>
  <div class="flex items-center gap-4 p-4 bg-yellow-100 rounded shadow">
    <button
        @click="startLoading"
        class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
    >
      LOAD 1
    </button>
    <span v-if="loading" class="text-sm text-yellow-700 animate-pulse">
      Loading...
    </span>
  </div>
</template>
