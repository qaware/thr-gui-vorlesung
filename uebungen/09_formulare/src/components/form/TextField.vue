<script setup lang="ts">
interface TextFieldProps {
  type?: 'email' | 'text' | 'password'
  id: string
  label: string
  required?: boolean
  invalid?: boolean
  placeholder?: string
  hint?: string
}

const model = defineModel<string>()
const props = defineProps<TextFieldProps>()
const emit = defineEmits(['blur', 'input'])
</script>

<template>
  <div class="flex flex-col sm:flex-row items-baseline gap-2">
    <label :for="props.id" class="w-full sm:w-1/2">
      {{ props.label }} {{ props.required ? '*' : '' }}
    </label>
    <div class="w-full sm:w-1/2 flex flex-col gap-1">
      <input
        :type="props.type ?? 'text'"
        :id="props.id"
        :name="props.id"
        v-model="model"
        :required="props.required"
        :placeholder="props.placeholder"
        :class="{
          'w-full border rounded-md p-2': true,
          'border-slate-800': !props.invalid,
          'border-red-500': props.invalid,
        }"
        @blur="emit('blur')"
        @input="emit('input')"
      />
      <div :class="{'text-xs ml-2' : true, 'text-red-500' : props.invalid}">
        {{ hint }}
      </div>
    </div>
  </div>
</template>
