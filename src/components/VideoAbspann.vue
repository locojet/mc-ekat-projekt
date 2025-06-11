<template>
  <div id="sec-0" class="video-container relative w-full overflow-hidden bg-secondary">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-secondary2 opacity-70"></div>

    <video
      class="video w-full h-auto min-h-full min-w-full object-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="../assets/mc-video-hd.mp4" type="video/mp4" />
      {{ $t('parallax.noVideoSupport') }}
    </video>

    <div
      class="haupt-ueberschrift absolute texto top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 text-center md:text-left responsive-left"
    >
      <h1 class="text-white font-bold text-4xl -mt-20 sm:text-3xl sm:-mt-20 md:text-3xl md:mt-40 lg:text-4xl lg:-mt-18">
        {{ $t('parallax.title') }}
      </h1>

      <h3 class="text-white uppercase text-base sm:text-lg mt-10">
        {{ $t('parallax.methods') }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParallaxSection',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const texto = document.querySelector('.texto');
      const scrollSpeed = 0.5;
      const scrolled = window.scrollY;

      if (texto) {
        texto.style.transform = `translate(-50%, -50%) translateY(${scrolled * scrollSpeed}px)`;
      }
    }
  }
};
</script>

<style scoped>
/* Ajuste responsive del left */
.responsive-left {
  left: 50%;
}

@media (min-width: 768px) {
  .responsive-left {
    left: 55%;
  }
}

@media (max-width: 768px) {
  .video-container {
    height: 75vh;
  }

  .texto {
    margin-top: 7rem;
  }

  .haupt-ueberschrift {
    margin-top: 10rem;
    margin-right: -3rem;
  }
}

@media (min-width: 768px) {
  .video-container {
    height: 500px;
  }

  .absolute {
    padding: 4rem;
    margin-left: -1rem;
  }

  h1 {
    margin-bottom: 2rem;
    margin-top: 9rem;
  }
}
</style>