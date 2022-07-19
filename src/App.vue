<script setup>
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav />
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');

:root {
  --black: #0c0c0c;
  --bg-black: #323232;
  --yellow: #ffc83d;
}

body {
  background-color: var(--black);
  font-family: 'Rubik', sans-serif;
}

::selection {
  background-color: var(--yellow);
  color: var(--black);
}
</style>
