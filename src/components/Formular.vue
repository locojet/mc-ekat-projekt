<template>
  <div class="contact-container">
    <form id="sec-4" @submit.prevent="submit(form)" class="bg-gray-800">
      <h1 class="text-3xl">Kontaktieren Sie uns</h1>
      <div class="input-wrapper email">
        <label for="email">E-Mail:</label>
        <input required v-model="form.email" type="email" name="email">
      </div>
      <div class="input-wrapper">
        <label for="name">Name:</label>
        <input required v-model="form.name" type="text" name="name">  
      </div>
      <div class="input-wrapper">
        <label for="subject">Betreff:</label>
        <input required v-model="form.subject" type="text" name="subject">
      </div>
      <div class="input-wrapper">
        <label for="message">Nachricht:</label>
        <textarea required v-model="form.message" name="message" rows="4"></textarea>
      </div>
      <button type="submit">
        <template v-if="waiting">Laden</template>
        <template v-if="!waiting">Abschicken</template>
      </button>
      <p v-if="errors">Etwas lief schief!</p>
      <p v-if="success">E-Mail wurde abgeschikt</p>
    </form>

    <div class="texto-kontakt contact-info text-1xl bg-gray-800">
      <p>Email: <a href="mailto:info@mcekat.de">info@mcekat.de</a></p>
      <p>Web: <a href="https://www.mcekat.de" target="_blank">www.mcekat.de</a></p>
      <p>Hauptbüro:<br>
        <a href="https://www.google.com/maps/search/?api=1&query=Heidmühlenweg+48a,+D-25336+Elmshorn" target="_blank">Heidmühlenweg 48a, D-25336 Elmshorn</a><br>
        Telefon: <a href="tel:+494121579254">+49 (0) 4121 57 92 54</a><br>
        Fax: +49 (0) 4121 57 92 56<br>
        Mobil: <a href="tel:+491736003264">+49 (0) 173 600 32 64</a>
      </p>
      <p>Zweigstelle:<br>
        <a href="https://www.google.com/maps/search/?api=1&query=Kaltenhöfer+Weg+1c,+D-23999+Insel+Poel" target="_blank">Kaltenhöfer Weg 1c, D-23999 Insel Poel</a><br>
        Telefon: <a href="tel:+493842542507">+49 (0) 38425 425 07</a><br>
        Fax: +49 (0) 38425 425 08<br>
        Mobil: <a href="tel:+491732371591">+49 (0) 173 237 15 91</a>
      </p>
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

<style lang="scss" scoped>
h1 {
  margin-top: 4rem;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically center */
  padding: 2rem;
  background-color: #2d3748; /* Gray-800 color */
  min-height: 100vh; /* Occupy the full viewport height */
}

form {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  margin: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
}

.contact-info {
  width: 35%;
  color: white;
  margin: 1rem;
  background-color: #2d3748; /* Gray-800 color */
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-info a {
  color: #4299e1; /* Blue-500 color */
  text-decoration: underline;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 1rem;
}

input, textarea {
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

button {
  width: 20%;
  border-radius: 0.3rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255);
  color: black;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;
  align-self: center;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }

  form {
    width: 100%;
  }

  .contact-info {
    width: 100%;
    text-align: center;
  }

  button {
    width: 35%;
  }
}

@media screen and (max-width: 780px) {
  button {
    width: 55%;
  }
}
</style>
