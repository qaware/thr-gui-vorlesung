<template>
  <div class="container mx-auto p-4">
    <input v-model="searchTerm" class="focus:ring-blue-500 border p-2 rounded-lg w-full shadow-lg focus:ring-2" placeholder="Search books">
    <ul class="mt-4 space-y-2">
      <li class="p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100" v-for="book in books" :key="book.title">{{ book.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import debounce from 'lodash.debounce'

const books = ref([]);
const searchTerm = ref('Rosenheim');

const fetchBooks = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm.value}&fields=items/volumeInfo/title`
  const response = await fetch(url);
  const data = await response.json();
  books.value = data.items.map(item => ({
    title: item.volumeInfo.title
  }));
};

// debounce führt die Funktion maximal alle X ms aus
// Vue.js hat keine debounce Funktion, deshalb nutzen wir lodash.debounce (OPTIONAL)
// Installieren über 'npm i lodash.debounce'
const debouncedFetchBooks = debounce(fetchBooks, 300); // Suche maximal alle 300ms

onMounted(fetchBooks); // Lädt die Bücher beim ersten Rendern
watch(searchTerm, debouncedFetchBooks);

</script>