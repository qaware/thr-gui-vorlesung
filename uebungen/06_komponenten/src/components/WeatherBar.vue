<script setup>
import {ref, onMounted} from 'vue';

const city = "Rosenheim";
const temperature = ref("--");
const description = ref("--");

async function fetchWeather() {
  const url = `https://wttr.in/${city}?format=%t+%C`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    const [temp, desc] = text.split(" ");
    temperature.value = temp;
    description.value = desc;
  } catch (error) {
    console.error("Fehler beim Abrufen der Wetterdaten:", error);
  }
}

onMounted(fetchWeather);
</script>

<template>
  <div class="flex items-center justify-center min-h-[30vh] bg-gray-100">
    <div class="p-6 bg-blue-500 text-white rounded-lg shadow-lg text-center w-64">
      <h2 class="text-2xl font-semibold">Wetter</h2>
      <p class="text-lg mt-2">{{ city }}</p>
      <p class="text-5xl font-bold">{{ temperature }}</p>
      <p class="text-lg mt-2 capitalize">{{ description }}</p>
    </div>
  </div>
</template>
