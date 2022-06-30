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
:root {
  --rich-black-fogra-39: #070707ff;
  --english-violet: #553555ff;
  --old-lavender: #755b69ff;
  --cambridge-blue: #96c5b0ff;
  --magic-mint: #adf1d2ff;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adf1d2ff;
  border: 2px solid var(--cambridge-blue);
  width: 300px;
  height: 70px;
  border-radius: 5px;
  font-size: 1.3rem;
}

.description {
  font-weight: bold;
  font-size: 1.1rem;
  margin-left: 10px;
  color: #f8f8f8;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}
</style>
