<template>
  <div class="bg-secondary2 text-white p-4 -mt-10  shadow-lg pb-40 mb-16" id="sec-2">
   
    
    <h1 class=" text-3xl text-top text-white m-8 text-center pt-20 pb-20">Wir suchen Dich zum nächstmöglichen Zeitpunkt in Vollzeit</h1>
    <div class="w-full max-w-4xl mx-auto  bg-secondary2 text-white mb-18  shadow-md">
      
      <hr class="my-2">

      <div v-for="(item, index) in faqs" :key="index" class="faq m-4 text-start">
        <h2 @click="toggle(index)" class="cursor-pointer text-white font-light my-4 text-lg m-2">
          {{ item.question }}
        </h2>
        <p v-show="item.isOpen" class="transition-opacity duration-500 ease-in-out max-h-full opacity-100 my-4 ml-5 text-white">
          {{ item.answer }}
        </p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'Was sind die Hauptaufgaben in diesem Job?',
          answer: 'Sie unterstützen uns bei Werkstoffprüfungen sowohl im Inland als auch im Ausland, vorwiegend in Norddeutschland.',
          isOpen: false
        },
        {
          question: 'Welche Qualifikationen sollte ich mitbringen?',
          answer: 'Flexibel, sportlich, technischer Berufshintergrund und Englischkenntnisse sind vorteilhaft. Ein Führerschein der Klasse 3 oder B, idealerweise mit BE, ist erforderlich. Eine Zertifizierung als ZFP-Prüfer mindestens Stufe 1 (UT, PT, MP, VT, ET) wäre von Vorteil.',
          isOpen: false
        },
        {
          question: 'Kann ich mich auch ohne spezifische Vorkenntnisse bewerben?',
          answer: 'Ja, alle weiteren notwendigen Fähigkeiten und Kenntnisse können bei uns erlernt werden.',
          isOpen: false
        },
        {
          question: 'Was bietet mir diese Position?',
          answer: 'Die Tätigkeit ist sehr abwechslungsreich, Sie werden Teil eines hoch motivierten Teams, es gibt Möglichkeiten zur Weiterbildung und Schulungen sowie ein attraktives Vergütungsmodell.',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggle(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }
  }
}
</script>

<style scoped>
#sec-2 {
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.5);
}
</style>
