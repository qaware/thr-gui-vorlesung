<script setup lang="ts">
import {reactive} from "vue";
import WelcomeMessage from "@/components/form/WelcomeMessage.vue";
import TextField from "@/components/form/TextField.vue";
import SubmitButton from "@/components/form/SubmitButton.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import Select from "@/components/form/Select.vue";

const salutations = ['Dr.', 'Eure Hoheit', 'Herr', 'Frau', 'Schatzi', 'Prof.', 'Prof. Dr.', 'Prof. Dr. Dr.', 'Prof. Dr. Dr. usw. 🙄']
type Salutation = typeof salutations[number]

interface FormData {
  emailAddress: string,
  password1: string,
  password2: string,
  salutation?: Salutation,
  firstName: string,
  lastName: string,
  invoiceAddress: string,
  zipCode: string,
  city: string,
  readTermsAndConditions: boolean,
  wantsNewsletter: boolean,
}

const formData = reactive<FormData>({
  emailAddress: '',
  password1: '',
  password2: '',
  salutation: undefined,
  firstName: '',
  lastName: '',
  invoiceAddress: '',
  zipCode: '',
  city: '',
  readTermsAndConditions: false,
  wantsNewsletter: true,
})

function handleSubmit() {
  console.log('Form data:', {...formData})
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <WelcomeMessage/>
    <TextField type="email" id="email-address" label="E-Mail-Adresse" v-model="formData.emailAddress"/>
    <TextField type="password" id="password1" label="Passwort" v-model="formData.password1"/>
    <TextField type="password" id="password2" label="Passwort wiederholen" v-model="formData.password2"/>
    <Select id="salutation" label="Anrede" v-model="formData.salutation">
      <option :value="undefined">keine</option>
      <option v-for="salutation in salutations" :value="salutation">{{ salutation }}</option>
    </Select>
    <TextField id="first-name" label="Vorname" v-model="formData.firstName"/>
    <TextField id="last-name" label="Nachname" v-model="formData.lastName"/>
    <TextField id="invoice-address" label="Straße und Hausnummer" v-model="formData.invoiceAddress"/>
    <TextField id="zip-code" label="PLZ" v-model="formData.zipCode"/>
    <TextField id="city" label="Ort" v-model="formData.city"/>
    <Checkbox id="terms-and-conditions" label="Ich habe die AGBs gelesen." v-model="formData.readTermsAndConditions"/>
    <Checkbox id="newsletter" label="Ich möchte den Newsletter bestellen." v-model="formData.wantsNewsletter"/>
    <SubmitButton>
      Let's get shady! 😎
    </SubmitButton>
  </form>
</template>
