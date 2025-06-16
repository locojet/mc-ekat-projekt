<template>
  <div id="sec-0" class="video-container relative w-full overflow-hidden bg-secondary">
    <!-- Video con precarga y eventos de carga -->
    <video
      ref="videoElement"
      class="video w-full h-auto min-h-full min-w-full object-cover opacity-0"
      style="transition: opacity 1.5s ease-out"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @loadeddata="onVideoLoaded"
      @canplaythrough="onVideoReady"
    >
      <source src="../assets/mc-video-hd.mp4" type="video/mp4" />
      {{ $t('parallax.noVideoSupport') }}
    </video>

    <!-- Overlay controlado -->
    <div 
      class="absolute inset-0 bg-secondary2 opacity-0"
      style="transition: opacity 1.5s ease-out"
      :style="{ opacity: showOverlay ? 0.7 : 0 }"
    ></div>

    <!-- Texto con retraso -->
    <div
      class="haupt-ueberschrift absolute texto top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 text-center md:text-left responsive-left opacity-0"
      style="transition: opacity 1.2s ease-out 0.6s"
      :style="{ opacity: showText ? 1 : 0 }"
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
      isVideoLoaded: false,
      isPageReady: false,
      showOverlay: false,
      showText: false
    }
  },
  mounted() {
    // Verificar si la página ya está cargada
    if (document.readyState === 'complete') {
      this.isPageReady = true
    } else {
      window.addEventListener('load', this.onPageLoad)
    }

    // Iniciar parallax
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('load', this.onPageLoad)
  },
  methods: {
    onPageLoad() {
      this.isPageReady = true
      this.checkReadyState()
    },
    onVideoLoaded() {
      this.isVideoLoaded = true
      this.checkReadyState()
    },
    onVideoReady() {
      // Para mayor seguridad
      this.isVideoLoaded = true
      this.checkReadyState()
    },
    checkReadyState() {
      if (this.isPageReady && this.isVideoLoaded) {
        // Mostrar video y overlay
        this.$refs.videoElement.style.opacity = 1
        this.showOverlay = true
        
        // Mostrar texto con retraso
        setTimeout(() => {
          this.showText = true
        }, 600)
      }
    },
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