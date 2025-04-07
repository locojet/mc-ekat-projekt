<template>
  <div id="sec-4" class="bg-gray-800 w-full py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
        
        <!-- Información de contacto -->
        <div class="contact-info space-y-6">
          <p>Email: <a href="mailto:juank2219@hotmail.com" class="text-blue-400 underline">info@mcekat.de</a></p>
          <p>Web: <a href="https://www.mcekat.de" target="_blank" class="text-blue-400 underline">www.mcekat.de</a></p>
          <p>
            Hauptbüro:<br>
            <a href="https://www.google.com/maps/search/?api=1&query=Heidmühlenweg+48a,+D-25336+Elmshorn"
               target="_blank"
               class="text-blue-400 underline">
               Heidmühlenweg 48a, D-25336 Elmshorn
            </a><br>
            Telefon: <a href="tel:+494121579254" class="text-blue-400 underline">+49 (0) 4121 57 92 54</a><br>
            Fax: +49 (0) 4121 57 92 56<br>
            Mobil: <a href="tel:+491736003264" class="text-blue-400 underline">+49 (0) 173 600 32 64</a>
          </p>
          <p>
            Zweigstelle:<br>
            <a href="https://www.google.com/maps/search/?api=1&query=Kaltenhöfer+Weg+1c,+D-23999+Insel+Poel"
               target="_blank"
               class="text-blue-400 underline">
               Kaltenhöfer Weg 1c, D-23999 Insel Poel
            </a><br>
            Telefon: <a href="tel:+493842542507" class="text-blue-400 underline">+49 (0) 38425 425 07</a><br>
            Fax: +49 (0) 38425 425 08<br>
            Mobil: <a href="tel:+491732371591" class="text-blue-400 underline">+49 (0) 173 237 15 91</a>
          </p>
        </div>

        <!-- Formulario (comentado por ahora) -->
        <!-- 
        <form @submit.prevent="submit(form)" class="flex flex-col space-y-4 p-6 rounded-lg bg-gray-700">
          <h1 class="text-2xl font-semibold text-center">Kontaktieren Sie uns</h1>
          <div class="flex flex-col">
            <label for="email">E-Mail:</label>
            <input required v-model="form.email" type="email" name="email" class="input" />
          </div>
          <div class="flex flex-col">
            <label for="name">Name:</label>
            <input required v-model="form.name" type="text" name="name" class="input" />
          </div>
          <div class="flex flex-col">
            <label for="subject">Betreff:</label>
            <input required v-model="form.subject" type="text" name="subject" class="input" />
          </div>
          <div class="flex flex-col">
            <label for="message">Nachricht:</label>
            <textarea required v-model="form.message" name="message" rows="4" class="input"></textarea>
          </div>
          <button type="submit" class="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 w-1/2 mx-auto mt-4">
            <template v-if="waiting">Laden...</template>
            <template v-else>Abschicken</template>
          </button>
          <p v-if="errors" class="text-red-500 text-center">Etwas lief schief!</p>
          <p v-if="success" class="text-green-500 text-center">E-Mail wurde abgeschickt</p>
        </form>
        -->

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const errors = ref(false);
const success = ref(false);
const waiting = ref(false);

async function submit(form) {
  console.log(form);
}
</script>

<style scoped>

.input {
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #4299e1;
}
</style>
