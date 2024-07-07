<template>
  <div class="img-container">
    <img src="../assets/zulassung.svg" alt="Zulassung" class="responsive-img h-200 object-cover">
  </div>
</template>

<style>
/* Globale Styles */

/* Responsive Bild-Styling */
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
   /* Containerhöhe auf Vollbild */
}

.responsive-img {
  width: 60%; /* Standardbreite auf größeren Bildschirmen */
  height: auto; /* Höhe automatisch anpassen */
  object-fit: cover; /* Sorgt dafür, dass das Bild den Container ohne Verzerrung füllt */
}

/* Anpassungen für kleinere Viewports */
@media (max-width: 768px) {
  .responsive-img {
    width: 100%; /* Breite auf kleinen Geräten */
  }

  .img-container {
    margin-top: 1rem; /* Kein Abstand oben auf kleinen Geräten */
  }
}
</style>
