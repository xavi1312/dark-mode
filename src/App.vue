<template>
  <div id="app" :class="isDarkMode">
    <customHeader />
    <section class="social-media-followers">
      <cardsFollowers />
    </section>
    <section></section>
  </div>
</template>

<script>
import cardsFollowers from "./components/cards-followers";
import customHeader from "./components/header";
export default {
  name: "App",
  components: { customHeader, cardsFollowers },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode ? "dark-theme" : "light-theme";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
@import "@/scss/variables.scss";
:root {
  margin: 0;
  & * {
    box-sizing: border-box;
  }
}
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  background-color: var(--bg);

  #app {
    color: var(--textColor);
    background-color: var(--bg);
    min-height: 100vh;
  }
}

.wraper {
  max-width: 1440px;

  padding: 0 30px;
  margin: 0 auto;
}
</style>
