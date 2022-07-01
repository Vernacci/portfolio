<script setup></script>

<template>
  <nav class="menu">
    <router-link to="/">About me</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact me</router-link>
  </nav>
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
  border: 1px solid transparent;
  transition: all 0.3s;
}

.menu a:hover {
  background-color: var(--black);
  color: var(--magic-mint);
  border: 1px solid var(--magic-mint);
}
</style>
