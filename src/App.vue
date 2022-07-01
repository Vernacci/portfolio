<script setup>
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav />
  <router-view></router-view>
</template>

<style>
:root {
  --black: #242424;
  --cambridge-blue: #96c5b0ff;
  --magic-mint: #adf1d2ff;
}

.intro {
  text-align: center;
  margin-top: 100px;
}

.name {
  font-size: 2.3rem;
  color: var(--magic-mint);
}

.name::after {
  content: 'Front-end Developer';
  font-size: 1.2rem;
  text-align: center;
  display: block;
}
</style>
