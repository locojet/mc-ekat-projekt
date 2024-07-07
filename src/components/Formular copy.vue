<template>
  <div id="sec-4" class="mx-auto bg-gray-100 flex-container">
    <div class="flex flex-col md:flex-row mx-auto">
      <div id="info" class="flex-1 p-4 text-start">
        <h1 class="text-2xl mt-0 mb-6 font-bold text-gray-900">Kontaktieren Sie uns</h1>
        <p class="text-1xl">
          Email: info@mcekat.de <br>
          Web: www.mcekat.de <br>
          Hauptbüro:<br>
          Heidmühlenweg 48a, D-25336 Elmshorn<br>
          Telefon: +49 (0) 4121 57 92 54<br>
          Fax: +49 (0) 4121 57 92 56<br>
          Mobil: +49 (0) 173 600 32 64<br>
          Zweigstelle:<br>
          Kaltenhöfer Weg 1c, D-23999 Insel Poel<br>
          Telefon: +49 (0) 38425 425 07<br>
          Fax: +49 (0) 38425 425 08<br>
          Mobil: +49 (0) 173 237 15 91
        </p>
      </div>
      <div id="form" class="flex-1 p-4 form-container mt-8">
        <form class="space-y-6" action="http://localhost/mc-ekat/send_email.php" method="POST" onsubmit="return validateForm()">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input placeholder="Vorname, Nachname" type="text" name="name" id="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700">Betreff</label>
            <input placeholder="Betriff" type="text" name="subject" id="subject" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required > 
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">E-Mail</label>
            <input placeholder="E-Mail" type="email" name="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Nachricht</label>
            <textarea placeholder="Schreiben Sie uns" name="message" id="message" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
          </div>
          
          <div>
            <input type="hidden" name="_next" value="URL_NACH_ABSCHICKEN_DEINER_WAHL">
            <input  type="text" name="_gotcha" style="display:none">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Senden</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Grundlegende clientseitige Validierung zur Vermeidung von XSS
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    if (regex.test(name) || regex.test(email) || regex.test(message)) {
      alert('Eingabe enthält ungültige Zeichen.');
      return false;
    }

    return true;
  }
</script>

<style scoped>
  .flex-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #sec-4 {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }

  #info, #form {
    width: 100%;
    align-items: flex-start;
  }

  #info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .flex-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    #info, #form {
      flex: 1 1 50%;
      padding: 3rem;
    }

    #sec-4 {
      max-width: 100%;
      padding: 0 3rem;
    }
  }
</style>
