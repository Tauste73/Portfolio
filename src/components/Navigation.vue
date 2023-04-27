<script setup lang="ts">


 function scrollToSection(sectionId :any) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
</script>



<template>
    <header class="container fixed flex flex-col sm:flex-row m top-0 bg-fond-page max-w-full shadow-lg text-white py-6">
        
        <h1 class="text-5xl font-semi-bold">Arnaud</h1>
        
        <nav class="container flex flex-row justify-end gap-4 ">
            <a @click="scrollToSection('presentation')" class="rounded-full border-solid border-2 hover:text-black hover:bg-white p-1 self-center cursor-pointer">Qui suis-je</a>
            <a @click="scrollToSection('competences')" class="rounded-full border-solid border-2 hover:text-black hover:bg-white p-1 self-center cursor-pointer">Compétences</a>
            <a @click="scrollToSection('projets')" class="rounded-full border-solid border-2 hover:text-black hover:bg-white p-1 self-center cursor-pointer">Projets</a>
            
        </nav>
    </header>
</template>