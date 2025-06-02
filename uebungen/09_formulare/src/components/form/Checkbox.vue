<script setup lang="ts">
interface CheckboxProps {
  id: string
  label: string
  required?: boolean
  invalid?: boolean
  hint?: string
}

const model = defineModel<boolean>()
const props = defineProps<CheckboxProps>()
const emit = defineEmits(['click'])
</script>

<template>
  <div class="flex items-baseline gap-2">
    <label :for="props.id" class="w-3/4 sm:w-1/2">
      {{ props.label }} {{ props.required ? '*' : '' }}
    </label>
    <div class="w-1/4 sm:w-1/2 flex flex-col gap-1">
      <input
        type="checkbox"
        :id="props.id"
        :name="props.id"
        v-model="model"
        :required="props.required"
        :class="{
          'appearance-none w-4 h-4 border rounded-md hover:bg-slate-100 checked:bg-slate-800 hover:checked:bg-slate-700': true,
          'border-slate-800': !props.invalid,
          'border-red-500': props.invalid,
        }"
        @click="emit('click')"
      />
      <div :class="{'text-xs' : true, 'text-red-500' : props.invalid}">
        {{ hint }}
      </div>
    </div>
  </div>
</template>
