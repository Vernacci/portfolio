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
  --rich-black-fogra-39: #070707ff;
  --english-violet: #553555ff;
  --old-lavender: #755b69ff;
  --cambridge-blue: #96c5b0ff;
  --magic-mint: #adf1d2ff;
}

.menu {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
  border-bottom: 1px solid var(--cambridge-blue);
  padding: 20px;
}

.menu a {
  color: #242424;
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
  content: 'Front-end Developer | UI-UX';
  font-size: 1.2rem;
  text-align: center;
  display: block;
}
</style>
