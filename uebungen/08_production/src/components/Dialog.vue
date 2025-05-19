<script setup lang="ts">

</script>

<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow w-96">
      <h2 class="text-lg font-bold mb-2">Ich bin ein Dialog!</h2>
      <p class="mb-4">Lade mich nur, wenn du mich brauchst. 😎</p>
      <button @click="$emit('close')" class="text-blue-600 underline">Schließen</button>
    </div>
  </div>
</template>


<style scoped>

</style>