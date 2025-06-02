<script setup lang="ts">
interface ButtonProps {
  disabled?: boolean
}

const props = defineProps<ButtonProps>()
const emit = defineEmits(['click'])
</script>

<template>
  <button
    type="submit"
    :disabled="props.disabled"
    class="bg-slate-800 text-amber-500 rounded-md p-4 hover:bg-slate-700 disabled:opacity-40 hover:disabled:bg-slate-800"
    @click="emit('click')"
  >
    <slot/>
  </button>
</template>
