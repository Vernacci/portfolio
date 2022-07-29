<script setup></script>

<template>
  <section>
    <h1>Say hello!</h1>
    <div class="email-form">
      <form
        action="https://formsubmit.co/86c3017a5fffec3ff5b41acf4cd56c04"
        method="POST"
      >
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="form-sm"
          placeholder="Your name here"
        />
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="form-sm"
          placeholder="Your e-mail here"
        />
        <label for="message">Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message here"
          class="form-lg"
        ></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://vernaccidev.netlify.app/#/thanks"
        />
        <button type="submit" class="submit-btn">Send</button>
      </form>
    </div>
  </section>
</template>

<style>
section {
  margin: 60px auto;
  margin-top: 70px;
  max-width: 700px;
  line-height: 1.9rem;
  color: var(--white);
}

.form-sm,
.form-lg {
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  background-color: var(--bg-black);
  color: var(--white);
  border: 2px solid transparent;
  font-size: 1.3rem;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
}

.form-sm:focus,
.form-lg:focus {
  outline: none;
  border: 2px solid var(--yellow);
  background-color: var(--black);
}

.form-lg {
  height: 200px;
  resize: none;
}

.submit-btn {
  margin-top: 20px;
  padding: 20px 60px;
  border: 2px solid transparent;
  background-color: var(--yellow);
  color: var(--black);
  border-radius: 10px;
  font-size: 1.3rem;
  transition: all 0.3s;
  width: 724px;
}

.submit-btn:hover {
  border: 2px solid var(--yellow);
  background-color: var(--black);
  color: var(--white);
  cursor: pointer;
}

label {
  font-size: 1.3rem;
}
</style>
