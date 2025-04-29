<script setup>
import {defineEmits, ref} from 'vue';
import Card from './Card.vue';

const fallbackImage = "https://placehold.co/300x200?text=Bild+fehlt";
const emit = defineEmits(['openDialog']);
const cards = ref([
  {
    id: 1,
    image: "https://picsum.photos/id/123/300/200",
    title: "Karte 1",
    description: "Beschreibung der Karte 1",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/124/300/200",
    title: "Karte 2",
    description: "Beschreibung der Karte 2",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/125/300/200",
    title: "Karte 3",
    description: "Beschreibung der Karte 3",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/126/300/200",
    title: "Karte 4",
    description: "Beschreibung der Karte 4",
  },
  {
    id: 5,
    image: "https://picsum.photos/id/127/300/200",
    title: "Karte 5",
    description: "Beschreibung der Karte 5",
  },
  {
    id: 6,
    image: "https://picsum.photos/id/128/300/200",
    title: "Karte 6",
    description: "Beschreibung der Karte 6",
  },
]);

function openDialog(card) {
  emit('openDialog', card);
}
</script>

<template>
  <div class="p-2 md:p-8 max-w-screen-lg mx-auto bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4 text-center">Kartenansicht mit Bildern</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
      <Card
        v-for="(card, index) in cards"
        :key="card.id"
        :card="card"
        :index="index"
        :fallbackImage="fallbackImage"
        @click="openDialog(card)"
      />
    </div>
  </div>
</template>