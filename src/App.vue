<script setup>
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav />
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
@import url('./bg.css');
:root {
  --black: #0c0c0c;
  --bg-black: #323232;
  --yellow: #ffc83d;
  --white: #fdfdfd;
}

body {
  font-family: 'Rubik', sans-serif;
}

::selection {
  background-color: var(--yellow);
  color: var(--black);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--black);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--bg-black);
}

/* Handle on hover */
</style>
