
<template>

    <main id="presentation" class="flex flex-col sm:flex-row text-white py-6 min-h-screen  sm:w-2/3 sm:m-auto">
        <img class=" animate-fade-in  rounded-full h-96 w-96 object-cover self-center" src="https://www.eclypsia.com/wp-content/uploads/eclypsia/2022/12/Salameche_LetsGo.jpg" /> 
        <div class=" flex items-stretch">
            <p class="animate-dash-in self-center m-3 text-2xl">Je m'appelle <b>Arnaud</b>, j'ai 21 ans et je suis actuellement étudiant en Master Informatique à l'université de Savoie Mont Blanc.</p>
        </div>

    </main>

</template>


<style>
    @keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation-name: fade-in;
  animation-duration: 4s; 
}


</style>