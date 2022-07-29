<template>
  <section>
    <h1>Skills</h1>
    <div class="skills-container">
      <img src="./svgs/html5.svg" alt="html logo" />
      <img src="./svgs/css.svg" alt="css logo" />
      <img src="./svgs/js.svg" alt="js logo" />
      <img src="./svgs/react.svg" alt="react logo" />
      <img src="./svgs/vue.svg" alt="Vue.js logo" />
      <img src="./svgs/git.svg" alt="Git logo" />
    </div>
  </section>
</template>

<style scoped>
.skills-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

img {
  width: 180px;
  height: 180px;
  filter: grayscale(100%);
  transition: all 0.3s;
}

img:hover {
  filter: none;
}
</style>
