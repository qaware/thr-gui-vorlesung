<script setup>
import ParentIndividual from "@/components/individual_state/Parent.vue";
import ParentProps from "@/components/shared_state_with_props/Parent.vue";
import ParentProvideInject from "@/components/shared_state_with_provide_inject/Parent.vue";
import ParentPinia from "@/components/shared_state_with_pinia/Parent.vue";
</script>

<template>
  <div class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-blue-50 p-4 rounded shadow">
        <h2 class="text-base font-semibold text-blue-800 mb-2">Individueller State</h2>
        <ParentIndividual />
      </div>

      <div class="bg-yellow-50 p-4 rounded shadow">
        <h2 class="text-base font-semibold text-yellow-800 mb-2">Shared via Props</h2>
        <ParentProps />
      </div>

      <div class="bg-purple-50 p-4 rounded shadow">
        <h2 class="text-base font-semibold text-purple-800 mb-2">Provide / Inject</h2>
        <ParentProvideInject />
      </div>

      <div class="bg-green-50 p-4 rounded shadow">
        <h2 class="text-base font-semibold text-green-800 mb-2">Pinia Store</h2>
        <ParentPinia />
      </div>
    </div>
  </div>
</template>
