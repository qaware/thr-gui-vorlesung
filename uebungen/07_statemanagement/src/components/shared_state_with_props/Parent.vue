<script setup>
import {ref} from "vue";

import ChildOne from "@/components/shared_state_with_props/ChildOne.vue";
import ChildTwo from "@/components/shared_state_with_props/ChildTwo.vue";
import ChildThree from "@/components/shared_state_with_props/ChildThree.vue";

const loading = ref(false);

function startLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

</script>

<template>
  <ChildOne :loading="loading" :startLoading="startLoading"></ChildOne>
  <ChildTwo :loading="loading" :startLoading="startLoading"></ChildTwo>
  <ChildThree :loading="loading" :startLoading="startLoading"></ChildThree>
</template>