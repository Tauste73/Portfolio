<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import Presentation from './components/Presentation.vue';
import Competences from './components/Competences.vue';
import Projet from './components/Projet.vue';
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="flex flex-col min-h-screan font-Roboto bg-fond-page scroll-smooth">
    <Navigation />
    <div class="sm:w-3/4 sm:m-auto">
      <Presentation />
      <Competences />
      <Projet />
      <Contact />
    </div>
  </div>
  
</template>

