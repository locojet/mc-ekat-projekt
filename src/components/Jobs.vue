<template>
  <div class="bg-secondary2 text-white p-4 -mt-10 shadow-lg pb-40 mb-16" id="jobs">
    <h1 class="text-3xl text-white m-8 text-center pt-20 pb-20">
      {{ $t('jobs.title') }}
    </h1>

    <div class="w-full max-w-4xl mx-auto bg-secondary2 text-white mb-18 shadow-md">
      <hr class="my-2" />

      <div
        v-for="(item, index) in faqs"
        :key="index"
        class="faq m-4 text-start"
      >
        <h2
          @click="toggle(index)"
          class="cursor-pointer text-white font-light my-4 text-lg m-2 transition duration-200 hover:opacity-80"
        >
          {{ $t(item.question) }}
        </h2>

        <transition
          name="accordion"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <div
            v-show="openIndex === index"
            ref="answers"
            class="faq-answer overflow-hidden text-white ml-5"
          >
            <div class="py-2">
              {{ $t(item.answer) }}
            </div>
          </div>
        </transition>

        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openIndex: null,
      faqs: [
        {
          question: 'jobs.faqs.0.question',
          answer: 'jobs.faqs.0.answer'
        },
        {
          question: 'jobs.faqs.1.question',
          answer: 'jobs.faqs.1.answer'
        },
        {
          question: 'jobs.faqs.2.question',
          answer: 'jobs.faqs.2.answer'
        },
        {
          question: 'jobs.faqs.3.question',
          answer: 'jobs.faqs.3.answer'
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    // Transiciones fluidas con height dinámico
    beforeEnter(el) {
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.transition = 'all 0.5s ease';
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.transition = 'all 0.5s ease';
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    }
  }
};
</script>

<style scoped>
#jobs {
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.5);
}
</style>