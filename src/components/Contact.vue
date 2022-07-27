<script setup></script>

<template>
  <section>
    <h1>Say hello!</h1>
    <h2>You can call me here:</h2>
    <div class="email-container">
      <a
        href="mailto:victorvernasqui25@outlook.com"
        class="mail"
        rel="noopener noreferrer"
        target="_blank"
        >Send me a message!</a
      >
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 60px auto;
  margin-top: 70px;
  max-width: 650px;
  line-height: 1.9rem;
  color: var(--white);
}

.mail {
  text-decoration: none;
  color: var(--white);
  background-color: var(--bg-black);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  font-size: 1.3rem;
  transition: all 0.5s;
}

.mail:hover {
  background-color: transparent;
  border: 2px solid var(--yellow);
}

.email-container {
  margin-top: 50px;
}
</style>
