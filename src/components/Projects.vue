<script setup>
import { reactive, ref } from 'vue';

const projects = reactive([
  {
    name: 'Interactive Pricing Component',
    img: '',
    description: 'lorem ipsun',
  },
  { name: 'Advice Generator App', img: '', description: 'lorem ipsun' },
  {
    name: 'Tip Calculator App',
    img: '',
    description: 'lorem ipsun',
  },
  {
    name: 'Interactive Pricing Component',
    img: '',
    description: 'lorem ipsun',
  },
]);
</script>

<template>
  <section>
    <h1>Projects</h1>
    <div class="container" v-for="project in projects">
      <h3>{{ project.name }}</h3>
      <img src="../assets/calculator.png" alt="" />
      <p>{{ project.description }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 40px auto;
  margin-top: 120px;
  max-width: 650px;
  line-height: 1.9rem;
  color: white;
}

img {
  width: 100%;
}
</style>
