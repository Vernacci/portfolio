<script setup></script>

<template>
  <section>
    <h1>Projects</h1>
    <h2>Frontend Mentors:</h2>
    <div class="projects-container">
      <a
        href="https://vernacci.github.io/interactive-rating-component/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        <img src="./img/rating.png" alt="Interactive Rating Component" />
      </a>
      <a
        href="https://vernacci.github.io/advice-generator-app-main/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        <img src="./img/advice.png" alt="Advice Generator App" />
      </a>
      <a
        href="https://vernacci.github.io/tip-calculator-app/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        <img src="./img/calculator.png" alt="Tip Calculator App" />
      </a>
      <a
        href="https://interactive-pricing-component25.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        <img src="./img/pricing.png" alt="Interactive Pricing Component" />
      </a>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 60px auto;
  margin-top: 70px;
  max-width: 750px;
  line-height: 1.7rem;
  color: white;
}

img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
  filter: grayscale(100%);
}

img:hover {
  filter: none;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 20px;
}
</style>
