<script setup>
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav />
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--black);
}

::-webkit-scrollbar-thumb {
  background: var(--bg-black);
  border-radius: 30px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
