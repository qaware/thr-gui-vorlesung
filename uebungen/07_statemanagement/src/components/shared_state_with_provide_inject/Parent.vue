<script setup>
import {ref, provide} from "vue";

import ChildOne from "@/components/shared_state_with_provide_inject/ChildOne.vue";
import ChildTwo from "@/components/shared_state_with_provide_inject/ChildTwo.vue";
import ChildThree from "@/components/shared_state_with_provide_inject/ChildThree.vue";

const loading = ref(false);
provide('loading', loading)

</script>

<template>
  <ChildOne></ChildOne>
  <ChildTwo></ChildTwo>
  <ChildThree></ChildThree>
</template>