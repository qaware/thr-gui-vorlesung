<script setup>
import { ref } from 'vue';
import Dialog from './components/Dialog.vue';
import CardsList from './components/CardsList.vue';
import WeatherBar from "@/components/WeatherBar.vue";

const showDialog = ref(false);
const selectedCard = ref(null);

function openDialog(card) {
  selectedCard.value = card;
  showDialog.value = true;
}
</script>

<template>
  <div class="container mx-auto p-4">
    <main class="flex p-6 bg-gray-100 min-h-96">
      <!-- Left column: Cards -->
      <div class="w-2/3 pr-4">
        <CardsList @openDialog="openDialog"/>
      </div>
      <!-- Right column: Sidebar with weather -->
      <div class="w-1/3 pl-4 mt-14">
        <WeatherBar/>
      </div>
    </main>
    <Dialog v-if="showDialog" :card="selectedCard" @closeDialog="showDialog = false"/>
  </div>
</template>