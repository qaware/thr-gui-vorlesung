<template>
  <router-view/>
  <section class="p-4">
    <div class="flex gap-4 py-4">
      <!-- Dialog lazy loaded -->
      <!-- Suspense nicht zwingend nötig, ermöglicht rendern eines Fallbacks, solange der Dialogs geladen wird-->
      <Suspense v-if="showDialog">
        <template #default>
          <LazyDialog @close="showDialog = false"/>
        </template>
        <template #fallback>
          <p class="text-sm text-gray-500">Lade Dialog...</p>
        </template>
      </Suspense>

      <button class="btn" @click="showDialog = true">Dialog öffnen</button>
      <button class="btn" @click="loadData">Katzenfakt laden</button>
    </div>

    <!-- Datenanzeige -->
    <div class="bg-gray-100 p-4 rounded shadow min-h-[50px]">
      <p v-if="loading">⏳ Lade Daten...</p>
      <p v-else-if="error" class="text-red-600">❌ Fehler beim Laden</p>
      <pre v-else-if="data">"{{ data }}"</pre>
    </div>
    <!-- Bild optimiert mit srcset und sizes -->
    <!-- Konvertierung zu webp zudem möglich -->
    <!-- Lazy Loading hier nur bedingt sinnvoll, da gleich zu Start der Seite sichtbar -->
    <img
        src="/src/assets/medium-image.jpg"
        srcset="
    /src/assets/small-image.jpg 400w,
    /src/assets/medium-image.jpg 800w,
    /src/assets/big-image.jpg 1200w
  "
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
        alt="Cute cat"
        loading="lazy"
        class="rounded shadow"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'

const LazyDialog = defineAsyncComponent(() => import('../components/Dialog.vue'))

const showDialog = ref(false)
const data = ref<string | null>(null)
const loading = ref(false)
const error = ref(false)

async function loadData() {
  loading.value = true
  error.value = false
  try {
    await new Promise(r => setTimeout(r, 1000)) // simulierte Latenz
    const res = await fetch('https://catfact.ninja/fact')
    const json = await res.json()
    data.value = json.fact
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>