<script setup>
const images = [{ src: './img/advice.png' }, { src: './img/calculator.png' }];
</script>

<template>
  <section>
    <h1>Contact</h1>
    <div v-for="img in images">
      <img :src="img.src" alt="" />
    </div>
  </section>
</template>

<style>
section {
  margin: 40px auto;
  margin-top: 120px;
  max-width: 650px;
  line-height: 1.9rem;
  color: white;
}
</style>
