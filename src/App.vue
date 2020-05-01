<template>
  <div id="app" :class="isDarkMode">
    <header class="header">
      <div class="wraper">
        <div class="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p class="total-followers">
              Total Followers:
              <span>{{
                this.$store.getters.totalFollowers | moreLegible
              }}</span>
            </p>
          </div>
          <div class="dark-mode">
            Dark Mode
            <darkModeSwitch />
          </div>
        </div>
      </div>
    </header>
    <section class="social-media-followers">
      <cardsFollowers />
    </section>
    <section></section>
  </div>
</template>

<script>
import darkModeSwitch from "./components/dark-mode-switch";
import cardsFollowers from "./components/cards-followers";
export default {
  name: "App",
  components: { darkModeSwitch, cardsFollowers },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode ? "dark-theme" : "light-theme";
    },
  },
};
</script>

<style lang="scss">
@import "@/globas.scss";

.header {
  padding-top: 2em;
  padding-bottom: 110px;

  background-color: var(--lightGray);
  border-radius: 0 0 20px 20px;
}
.header-grid {
  h1 {
    margin: 0;
    font-size: 1.7em;
  }
}
.total-followers {
  margin: 0.5em 0;
  padding-bottom: 1.5em;

  font-size: 15px;
  font-weight: 600;

  color: var(--gray);
  border-bottom: 1px solid var(--gray);
}
.dark-mode {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1em;
}

.social-media-followers {
  margin-top: -40px;
}
</style>
