<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(['card']);
const emit = defineEmits(['closeDialog']);
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-lg w-1/3">
      <h2 class="text-xl font-semibold mb-4">{{ card.title }}</h2>
      <img :src="card.image" alt="Bild" class="rounded w-full mb-4"/>
      <p class="text-gray-600 mb-4">{{ card.description }}</p>
      <button @click="emit('closeDialog')" class="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
</template>