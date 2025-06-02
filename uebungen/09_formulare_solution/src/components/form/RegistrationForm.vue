<script setup lang="ts">
import {reactive} from "vue";
import WelcomeMessage from "@/components/form/WelcomeMessage.vue";
import TextField from "@/components/form/TextField.vue";
import SubmitButton from "@/components/form/SubmitButton.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import Select from "@/components/form/Select.vue";

const salutations = ['Dr.', 'Eure Hoheit', 'Herr', 'Frau', 'Schatzi', 'Prof.', 'Prof. Dr.', 'Prof. Dr. Dr.', 'Prof. Dr. Dr. usw. 🙄']
type Salutation = typeof salutations[number]

// Hardcoded Strings in Konstanten auslagern

const REGEX_EMAIL_ADDRESS = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/ // Not RFC-3622 complete
const REGEX_ZIP_CODE = /^[A-Za-z0-9\s-]{3,10}$/

const HINT_INVOICE_ADDRESS = 'Rechnungsanschrift';
const HINT_VALID_PASSWORD = 'Dein Passwort muss zwischen 12 und 32 Zeichen lang sein.';

const ERROR_INVALID_EMAIL_ADDRESS = 'Bitte gib eine gültige E-Mail-Adresse ein!';
const ERROR_PASSWORD_MATCH = 'Die Passwörter stimmen nicht überein.';
const ERROR_REQUIRED_FIELD = 'Dies ist ein Pflichtfeld.';
const ERROR_FIRST_NAME_TOO_LONG = 'Dein Vorname darf maximal 32 Zeichen lang sein.';
const ERROR_LAST_NAME_TOO_LONG = 'Dein Nachname darf maximal 32 Zeichen lang sein.';
const ERROR_INVOICE_ADDRESS_TOO_LONG = 'Deine Rechnungsanschrift darf maximal 32 Zeichen lang sein.';
const ERROR_CITY_TOO_LONG = 'Dein Ort darf maximal 32 Zeichen lang sein.';
const ERROR_TERMS_AND_CONDITIONS_REQUIRED = 'Du musst die AGBs akzeptieren.';
const ERROR_INVALID_ZIP_CODE = 'Bitte gib eine gültige PLZ ein!';

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

interface FormValidationState {
  emailAddressInvalid: boolean
  emailAddressHint?: string
  password1Invalid: boolean,
  password2Invalid: boolean
  password2Hint?: string
  firstNameInvalid: boolean
  firstNameHint?: string
  lastNameInvalid: boolean
  lastNameHint?: string
  invoiceAddressInvalid: boolean
  invoiceAddressHint?: string
  zipCodeInvalid: boolean
  zipCodeHint?: string
  cityInvalid: boolean
  cityHint?: string
  readTermsAndConditionsInvalid: boolean
  readTermsAndConditionsHint?: string
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

const formValidationState = reactive<FormValidationState>({
  emailAddressInvalid: false,
  emailAddressHint: '',
  password1Invalid: false,
  password2Invalid: false,
  password2Hint: '',
  firstNameInvalid: false,
  firstNameHint: '',
  lastNameInvalid: false,
  lastNameHint: '',
  invoiceAddressInvalid: false,
  invoiceAddressHint: HINT_INVOICE_ADDRESS,
  zipCodeInvalid: false,
  zipCodeHint: '',
  cityInvalid: false,
  cityHint: '',
  readTermsAndConditionsInvalid: false,
  readTermsAndConditionsHint: '',
})

function validateEmailAddress(): boolean {
  formValidationState.emailAddressInvalid = false
  formValidationState.emailAddressHint = ''

  if (!REGEX_EMAIL_ADDRESS.test(formData.emailAddress) || formData.emailAddress.length > 32) {
    formValidationState.emailAddressInvalid = true
    formValidationState.emailAddressHint = ERROR_INVALID_EMAIL_ADDRESS
    return false
  }
  return true
}

function validatePassword1() {
  formValidationState.password1Invalid = false

  if (formData.password1.length < 12 || formData.password1.length > 32) {
    formValidationState.password1Invalid = true
    return false
  }
  return true
}

function validatePassword2() {
  formValidationState.password2Invalid = false
  formValidationState.password2Hint = ''

  if (formData.password2 !== formData.password1) {
    formValidationState.password2Invalid = true
    formValidationState.password2Hint = ERROR_PASSWORD_MATCH
    return false
  }
  return true
}

function validateFirstName(): boolean {
  formValidationState.firstNameInvalid = false
  formValidationState.firstNameHint = ''

  if (formData.firstName.length === 0) {
    formValidationState.firstNameInvalid = true
    formValidationState.firstNameHint = ERROR_REQUIRED_FIELD
    return false
  }

  if (formData.firstName.length > 32) {
    formValidationState.firstNameInvalid = true
    formValidationState.firstNameHint = ERROR_FIRST_NAME_TOO_LONG
    return false
  }
  return true
}

function validateLastName(): boolean {
  formValidationState.lastNameInvalid = false
  formValidationState.lastNameHint = ''

  if (formData.lastName.length === 0) {
    formValidationState.lastNameInvalid = true
    formValidationState.lastNameHint = ERROR_REQUIRED_FIELD
    return false
  }

  if (formData.lastName.length > 32) {
    formValidationState.lastNameInvalid = true
    formValidationState.lastNameHint = ERROR_LAST_NAME_TOO_LONG
    return false
  }
  return true
}

function validateInvoiceAddress(): boolean {
  formValidationState.invoiceAddressInvalid = false
  formValidationState.invoiceAddressHint = HINT_INVOICE_ADDRESS

  if (formData.invoiceAddress.length === 0) {
    formValidationState.invoiceAddressInvalid = true
    formValidationState.invoiceAddressHint = ERROR_REQUIRED_FIELD
    return false
  }

  if (formData.invoiceAddress.length > 32) {
    formValidationState.invoiceAddressInvalid = true
    formValidationState.invoiceAddressHint = ERROR_INVOICE_ADDRESS_TOO_LONG
    return false
  }
  return true
}

function validateZipCode(): boolean {
  formValidationState.zipCodeInvalid = false
  formValidationState.zipCodeHint = ''

  if (!REGEX_ZIP_CODE.test(formData.zipCode)) {
    formValidationState.zipCodeInvalid = true
    formValidationState.zipCodeHint = ERROR_INVALID_ZIP_CODE
    return false
  }
  return true
}

function validateCity(): boolean {
  formValidationState.cityInvalid = false
  formValidationState.cityHint = ''

  if (formData.city.length === 0) {
    formValidationState.cityInvalid = true
    formValidationState.cityHint = ERROR_REQUIRED_FIELD
    return false
  }

  if (formData.city.length > 32) {
    formValidationState.cityInvalid = true
    formValidationState.cityHint = ERROR_CITY_TOO_LONG
    return false
  }
  return true
}

function validateTermsAndConditions(): boolean {
  formValidationState.readTermsAndConditionsInvalid = false
  formValidationState.readTermsAndConditionsHint = ''

  if (!formData.readTermsAndConditions) {
    formValidationState.readTermsAndConditionsInvalid = true
    formValidationState.readTermsAndConditionsHint = ERROR_TERMS_AND_CONDITIONS_REQUIRED
    return false
  }
  return true
}

function validateForm() {
  const isValidEmailAddress = validateEmailAddress()
  const isValidPassword1 = validatePassword1()
  const isValidPassword2 = validatePassword2()
  const isValidFirstName = validateFirstName()
  const isValidLastName = validateLastName()
  const isValidInvoiceAddress = validateInvoiceAddress()
  const isValidZipCode = validateZipCode()
  const isValidCity = validateCity()
  const isValidTermsAndConditions = validateTermsAndConditions()

  return isValidEmailAddress
    && isValidPassword1
    && isValidPassword2
    && isValidFirstName
    && isValidLastName
    && isValidInvoiceAddress
    && isValidZipCode
    && isValidCity
    && isValidTermsAndConditions
}

function handleBlurEmailAddress() {
  validateEmailAddress()
}

function handleInputEmailAddress() {
  if (formValidationState.emailAddressInvalid) {
    validateEmailAddress()
  }
}

function handleBlurPassword1() {
  validatePassword1()
}

function handleInputPassword1() {
  if (formValidationState.password1Invalid) {
    validatePassword1()
  }
}

function handleBlurPassword2() {
  validatePassword2()
}

function handleInputPassword2() {
  if (formValidationState.password2Invalid) {
    validatePassword2()
  }
}

function handleBlurFirstName() {
  validateFirstName()
}

function handleInputFirstName() {
  if (formValidationState.firstNameInvalid) {
    validateFirstName()
  }
}

function handleBlurLastName() {
  validateLastName()
}

function handleInputLastName() {
  if (formValidationState.lastNameInvalid) {
    validateLastName()
  }
}

function handleBlurInvoiceAddress() {
  validateInvoiceAddress()
}

function handleInputInvoiceAddress() {
  if (formValidationState.invoiceAddressInvalid) {
    validateInvoiceAddress()
  }
}

function handleBlurZipCode() {
  validateZipCode()
}

function handleInputZipCode() {
  if (formValidationState.zipCodeInvalid) {
    validateZipCode()
  }
}

function handleBlurCity() {
  validateCity()
}

function handleInputCity() {
  if (formValidationState.cityInvalid) {
    validateCity()
  }
}

function handleChangeTermsAndConditions() {
  if (formValidationState.readTermsAndConditionsInvalid) {
    validateTermsAndConditions()
  }
}

function handleSubmit() {
  if (validateForm()) {
    console.log('Form data:', {...formData})
  }
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <WelcomeMessage/>
    <TextField
      id="email-address"
      label="E-Mail-Adresse"
      v-model.trim="formData.emailAddress"
      required
      :invalid="formValidationState.emailAddressInvalid"
      :hint="formValidationState.emailAddressHint"
      @blur="handleBlurEmailAddress"
      @input="handleInputEmailAddress"
    />
    <TextField
      type="password"
      id="password1"
      label="Passwort"
      v-model="formData.password1"
      required
      :invalid="formValidationState.password1Invalid"
      :hint="HINT_VALID_PASSWORD"
      @blur="handleBlurPassword1"
      @input="handleInputPassword1"
    />
    <TextField
      type="password"
      id="password2"
      label="Passwort wiederholen"
      v-model="formData.password2"
      required
      :invalid="formValidationState.password2Invalid"
      :hint="formValidationState.password2Hint"
      @blur="handleBlurPassword2"
      @input="handleInputPassword2"
    />
    <Select id="salutation" label="Anrede" v-model="formData.salutation">
      <option :value="undefined">keine</option>
      <option v-for="salutation in salutations" :value="salutation">{{ salutation }}</option>
    </Select>
    <TextField
      id="first-name"
      label="Vorname"
      v-model="formData.firstName"
      required
      :invalid="formValidationState.firstNameInvalid"
      :hint="formValidationState.firstNameHint"
      @blur="handleBlurFirstName"
      @input="handleInputFirstName"
    />
    <TextField
      id="last-name"
      label="Nachname"
      v-model="formData.lastName"
      required
      :invalid="formValidationState.lastNameInvalid"
      :hint="formValidationState.lastNameHint"
      @blur="handleBlurLastName"
      @input="handleInputLastName"
    />
    <TextField
      id="invoice-address"
      label="Straße und Hausnummer"
      v-model="formData.invoiceAddress"
      required
      :invalid="formValidationState.invoiceAddressInvalid"
      :hint="formValidationState.invoiceAddressHint"
      @blur="handleBlurInvoiceAddress"
      @input="handleInputInvoiceAddress"
    />
    <TextField
      id="zip-code"
      label="PLZ"
      v-model="formData.zipCode"
      required
      :invalid="formValidationState.zipCodeInvalid"
      :hint="formValidationState.zipCodeHint"
      @blur="handleBlurZipCode"
      @input="handleInputZipCode"
    />
    <TextField
      id="city"
      label="Ort"
      v-model="formData.city"
      required
      :invalid="formValidationState.cityInvalid"
      :hint="formValidationState.cityHint"
      @blur="handleBlurCity"
      @input="handleInputCity"
    />
    <Checkbox
      id="terms-and-conditions"
      label="Ich habe die AGBs gelesen."
      v-model="formData.readTermsAndConditions"
      required
      :invalid="formValidationState.readTermsAndConditionsInvalid"
      :hint="formValidationState.readTermsAndConditionsHint"
      @change="handleChangeTermsAndConditions"
    />
    <Checkbox id="newsletter" label="Ich möchte den Newsletter bestellen." v-model="formData.wantsNewsletter"/>
    <SubmitButton>
      Let's get shady! 😎
    </SubmitButton>
  </form>
</template>
