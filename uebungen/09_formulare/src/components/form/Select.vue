<script setup lang="ts">
interface SelectProps {
  id: string
  label: string
  required?: boolean
  invalid?: boolean
  hint?: string
}

const model = defineModel<string>()
const props = defineProps<SelectProps>()
const emit = defineEmits(['select'])
</script>

<template>
  <div class="flex flex-col sm:flex-row items-baseline gap-2">
    <label :for="props.id" class="w-full sm:w-1/2">
      {{ props.label }} {{ props.required ? '*' : '' }}
    </label>
    <div class="w-full sm:w-1/2 flex flex-col gap-1">
      <select
        :id="props.id"
        :name="props.id"
        v-model="model"
        :required="props.required"
        :class="{
          'w-full h-[42px] bg-white border rounded-md p-2': true,
          'border-slate-800': !props.invalid,
          'border-red-500': props.invalid,
        }"
        @select="emit('select')"
      >
        <slot/>
      </select>
      <div :class="{'text-xs ml-2' : true, 'text-red-500' : props.invalid}">
        {{ hint }}
      </div>
    </div>
  </div>
</template>
