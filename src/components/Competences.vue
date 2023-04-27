<template>
    <div id="competences" ref="competences" class="text-white py-6 min-h-screen scroll-mt-32">
        <div class="mb-4">
            <h2 class="text-4xl underline underline-offset-4">Compétences</h2>
            <p>Voici quelques technologies que j'ai pu utiliser.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-lg  self-center sm:w-2/3 sm:m-auto">
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://angular.io/" >
                <img src="./../assets/logo/angular.png" alt="angular.png" />
                <p class="self-center mt-1">Angular</p>
            </a>
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://vuejs.org/" >
                <img src="./../assets/logo/vue.png" alt="vue.png" />
                <p class="self-center mt-1">Vue JS</p>
            </a>
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://kotlinlang.org/" >
                <img src="./../assets/logo/kotlin.png" alt="kotlin.png" />
                <p class="self-center mt-1">Kotlin</p>
            </a>
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://www.python.org/" >
                <img src="./../assets/logo/python.png" alt="python.png" />
                <p class="self-center mt-1">Python</p>
            </a>
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://nodejs.org/fr" >
                <img src="./../assets/logo/node.png" alt="node.png" />
                <p class="self-center mt-1">Node JS</p>
            </a>
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://spring.io/" >
                <img src="./../assets/logo/spring.png" alt="spring.png" />
                <p class="self-center mt-1">Spring Boot</p>
            </a>
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://www.docker.com/" >
                <img src="./../assets/logo/docker.png" alt="docker.png" />
                <p class="self-center mt-1">Docker</p>
            </a>
            <a class="flex flex-col bg-fond-card p-3 text-center hover:-translate-y-1 duration-300" href="https://azure.microsoft.com/fr-fr/" >
                <img src="./../assets/logo/azure.webp" alt="azure.png" />
                <p class="self-center mt-1">Azure</p>
            </a>
        </div>
    </div>
</template>