<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Main from "@/components/layout/Main.vue";
import RegistrationForm from "@/components/form/RegistrationForm.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header/>
    <Main>
      <RegistrationForm/>
    </Main>
    <Footer/>
  </div>
</template>
