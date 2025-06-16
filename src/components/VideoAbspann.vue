<template>
  <div id="sec-0" class="video-container relative w-full overflow-hidden bg-secondary">
    <!-- Overlay con transición de opacidad -->
    <div class="absolute inset-0 bg-secondary2 transition-opacity duration-1000" :style="overlayStyle"></div>

    <!-- Video con transición -->
    <video
      class="video w-full h-auto min-h-full min-w-full object-cover transition-opacity duration-1000"
      :style="videoStyle"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      disablepictureinpicture
      @loadeddata="handleVideoLoaded"
    >
      <source src="../assets/mc-video-hd.mp4" type="video/mp4" />
      {{ $t('parallax.noVideoSupport') }}
    </video>

    <!-- Contenido de texto (sin cambios) -->
    <div
      class="haupt-ueberschrift absolute texto top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 text-center md:text-left responsive-left will-change-transform"
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
      isLoaded: false,
      overlayOpacity: 0.7 // Mantenemos tu opacidad original
    };
  },
  computed: {
    videoStyle() {
      return {
        opacity: this.isLoaded ? 1 : 0
      };
    },
    overlayStyle() {
      return {
        opacity: this.isLoaded ? this.overlayOpacity : 0
      };
    }
  },
  mounted() {
    this._raf = null;
    this._lastScroll = 0;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    
    // Precargar video
    const video = document.querySelector('.video');
    if (video) video.load();
  },
  beforeDestroy() {
    if (this._raf) cancelAnimationFrame(this._raf);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this._raf) cancelAnimationFrame(this._raf);
      this._raf = requestAnimationFrame(() => {
        const texto = document.querySelector('.texto');
        const scrollSpeed = 0.5;
        const scrolled = window.scrollY;
        
        if (Math.abs(scrolled - this._lastScroll) > 1) {
          if (texto) {
            texto.style.transform = `translate(-50%, -50%) translateY(${scrolled * scrollSpeed}px)`;
          }
          this._lastScroll = scrolled;
        }
      });
    },
    handleVideoLoaded() {
      // Esperar un frame más para asegurar que el video está listo
      requestAnimationFrame(() => {
        this.isLoaded = true;
      });
    }
  }
};
</script>

<style scoped>
/* Tus estilos originales SIN CAMBIOS */
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

/* Solo añadimos estas propiedades para la transición */
.video {
  opacity: 0; /* Inicialmente invisible */
  transition: opacity 1.5s ease-out; /* Transición más suave */
}

.bg-secondary2 {
  transition: opacity 1.5s ease-out; /* Transición para el overlay */
}

.will-change-transform {
  will-change: transform;
  backface-visibility: hidden;
}
</style>