<script setup>
import {ref} from 'vue'
const emit = defineEmits(['success'])

const email = ref('')
const showHello = ref(false);
const login = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST'})
  if (res.ok) {
    emit('success')
    showHello.value = true
  }
}
</script>

<template>
  <form @submit.prevent="login">
    <label for="email">E-Mail</label>
    <input id="email" v-model="email"/>
    <button type="submit">Login</button>
    <span v-if="showHello">Hello</span>
  </form>
</template>