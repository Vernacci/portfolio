<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <router-link to="/" class="logo">Vv</router-link>
    <nav class="nav">
      <ul class="nav-content">
        <li>
          <router-link to="/projects">01. Projects</router-link>
        </li>
        <li>
          <router-link to="/skills">02. Skills</router-link>
        </li>
        <li>
          <router-link to="/contact">03. Contact me</router-link>
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
  color: var(--white);
  text-decoration: none;
}

.logo {
  border-bottom: 1px solid var(--yellow);
  padding: 5px;
  font-size: 2.5rem;
  transition: all 0.5s;
}

.logo:hover {
  color: var(--yellow);
  border-bottom: 1px solid var(--white);
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
  color: var(--white);
  padding: 10px;
  transition: all 0.5s;
  font-size: 1.3rem;
}

.nav-content a:hover {
  color: var(--yellow);
}

span {
  display: flex;
  justify-content: start;
  align-items: center;
  color: var(--white);
}
</style>
