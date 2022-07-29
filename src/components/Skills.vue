<template>
  <section>
    <h1>Skills</h1>
    <div class="skills-container">
      <img src="./svgs/html.SVG" alt="HTML logo" />
      <img src="./svgs/css.SVG" alt="css logo" />
      <img src="./svgs/js.SVG" alt="js logo" />
      <img src="./svgs/react.SVG" alt="react logo" />
      <img src="./svgs/Vue.SVG" alt="Vue.js logo" />
      <img src="./svgs/Git.SVG" alt="Git logo" />
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
