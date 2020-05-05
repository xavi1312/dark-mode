<template>
  <header class="header">
    <div class="wraper">
      <div class="header-grid">
        <div>
          <h1>Social Media Dashboard</h1>
          <p class="total-followers">
            Total Followers:
            <span>{{
              this.$store.getters.totalFollowers | separationBythousands
            }}</span>
          </p>
        </div>
        <div class="dark-mode">
          <darkModeSwitch />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import darkModeSwitch from "./dark-mode-switch";

export default {
  name: "customHeader",
  components: {
    darkModeSwitch,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
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
  justify-content: flex-end;
  align-items: center;
  padding-top: 1em;
}

.social-media-followers {
  margin-top: -40px;
}
</style>
