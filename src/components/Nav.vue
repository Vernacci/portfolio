<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <router-link to="/" class="logo">Vv</router-link>
    <nav class="nav">
      <ul class="nav-content">
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact me</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 50px;
}

header a {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

.logo {
  border-bottom: 1px solid #ffc83d;
  padding: 5px;
  font-size: 1.8rem;
}

.nav {
  margin-right: 50px;
}

ul {
  display: flex;
  gap: 25px;
}

li {
  list-style: none;
}

.nav-content a {
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.5s;
  font-size: 1.3rem;
}

.nav-content a:hover {
  background-color: var(--bg-black);
}

span {
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
}
</style>
