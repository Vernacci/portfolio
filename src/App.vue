<script setup></script>

<template>
  <nav class="menu">
    <img src="" alt="" class="logo" />
    <a href="Projects">Projects</a>
    <a href="Contact">Contact me</a>
  </nav>
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

.menu {
  display: flex;
  margin-top: 10px;
  justify-content: center;
  gap: 30px;
  border-bottom: 1px solid var(--cambridge-blue);
  padding: 30px;
}

.menu a {
  color: var(--black);
  background-color: var(--cambridge-blue);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 8px;
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
