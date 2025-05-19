<template>
  <router-view/>
  <section class="p-4">
    <div class="flex gap-4 py-4">
      <!-- Dialog ist immer im Bundle -->
      <Dialog v-if="showDialog" @close="showDialog = false"/>

      <button class="btn" @click="showDialog = true">Dialog öffnen</button>

      <!-- Kein Ladezustand -->
      <button class="btn" @click="loadData">Katzenfakt laden</button>
    </div>
    <pre>{{ data }}</pre>
    <!-- Unoptimiertes Bild -->
    <img src="/src/assets/big-image.jpg" alt="Bild"/>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '../components/Dialog.vue'

const showDialog = ref(false)
const data = ref(null)

async function loadData() {
  await new Promise((r) => setTimeout(r, 1000)) // simulierte Latenz
  const res = await fetch('https://catfact.ninja/fact')
  data.value = await res.json()
}
</script>