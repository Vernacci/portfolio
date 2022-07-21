<template>
  <main>
    <h1>Hello i'm Victor Vernasqui 👋</h1>
    <h2>I'm a Front-end Developer based in Brazil</h2>
  </main>
</template>

<style>
main {
  margin: 60px auto;
  margin-top: 120px;
  max-width: 650px;
  line-height: 1.9rem;
  color: white;
}

h1 {
  font-size: 2.8rem;
}

h1::after {
  content: '';
  width: 110px;
  height: 2px;
  margin-top: 15px;
  display: block;
  background-color: var(--yellow);
}
</style>
