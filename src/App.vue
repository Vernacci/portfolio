<script setup>
import { ref } from 'vue';

const projetos = ref([
  { title: 'Advice generator app', description: 'Generate a random advice' },
  {
    title: 'Tip calculator app',
    description: 'Calculate the tip amount and total',
  },
  {
    title: 'Interactive rating component',
    description: 'Give feedback about your experience',
  },
]);
</script>

<template>
  <main>
    <div>
      <ul v-for="projeto in projetos">
        <li class="title">{{ projeto.title }}</li>
        <p class="description">{{ projeto.description }}</p>
      </ul>
    </div>
  </main>
</template>

<style>
* {
  font-family: Sans-serif;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #242424;
  width: 300px;
  height: 70px;
  border-radius: 5px;
  font-size: 1.3rem;
}

.description {
  font-weight: bold;
  font-size: 1.1rem;
  margin-left: 10px;
  color: #242424;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

body {
  background-color: #f8f8f8;
}
</style>
