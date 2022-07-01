<script setup></script>

<template>
  <header class="intro">
    <h1 class="name">Hi! I'm Victor Vernasqui 👋</h1>
  </header>
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
  content: 'A Front-end Developer';
  font-size: 1.2rem;
  text-align: center;
  margin-top: 15px;
  display: block;
}
</style>
