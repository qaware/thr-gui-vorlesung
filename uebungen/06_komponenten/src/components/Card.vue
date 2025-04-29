<script setup>
import {defineProps} from 'vue';

defineProps({
  card: Object,
  index: Number,
  fallbackImage: String
});

</script>

<template>
  <div class="bg-white rounded shadow p-4 hover:shadow-lg transition h-full cursor-pointer">
    <img :src="`${card.image}`" class="rounded w-full mb-4" @error="card.image = fallbackImage"/>
    <h2 class="text-xl font-semibold mb-2">{{ card.title }}</h2>
    <p class="text-gray-600">{{ card.description }}</p>
  </div>
</template>
