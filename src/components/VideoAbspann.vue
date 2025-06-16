<template>
  <div id="sec-0" class="video-container relative w-full overflow-hidden bg-secondary">
    <!-- Video con transición suave -->
    <video
      ref="videoElement"
      class="video w-full h-auto min-h-full min-w-full object-cover"
      :style="{ opacity: videoOpacity, transition: 'opacity 1.5s ease-out' }"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="../assets/mc-video-hd.mp4" type="video/mp4" />
      {{ $t('parallax.noVideoSupport') }}
    </video>

    <!-- Overlay con transición sincronizada -->
    <div 
      class="absolute inset-0 bg-secondary2"
      :style="{ opacity: overlayOpacity, transition: 'opacity 1.5s ease-out' }"
    ></div>

    <!-- Texto con transición retardada -->
    <div
      class="haupt-ueberschrift absolute texto top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 text-center md:text-left responsive-left"
      :style="{ opacity: textOpacity, transition: 'opacity 1.2s ease-out 0.6s' }"
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
  data() {
    return {
      videoOpacity: 0,
      overlayOpacity: 0,
      textOpacity: 0
    }
  },
  mounted() {
    // Transición para video y overlay (simultánea)
    setTimeout(() => {
      this.videoOpacity = 1
      this.overlayOpacity = 0.7
    }, 100)

    // Transición para texto con retraso
    setTimeout(() => {
      this.textOpacity = 1
    }, 700) // 700ms después que video/overlay

    // Parallax original
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const texto = document.querySelector('.texto')
      const scrollSpeed = 0.5
      const scrolled = window.scrollY

      if (texto) {
        texto.style.transform = `translate(-50%, -50%) translateY(${scrolled * scrollSpeed}px)`
      }
    }
  }
}
</script>

<style scoped>
/* Todos tus estilos originales se mantienen EXACTAMENTE IGUAL */
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