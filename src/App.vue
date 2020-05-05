<template>
  <div id="app">
    <customHeader />
    <section class="social-media-followers">
      <cardFollowersList />
    </section>
    <section class="overview">
      <overview />
    </section>
  </div>
</template>

<script>
import cardFollowersList from "@/components/card-followers-list";
import customHeader from "@/components/header";
import overview from "@/components/overview";
export default {
  name: "App",
  components: { customHeader, cardFollowersList, overview },
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
h2 {
  color: var(--gray);
}

.social-media-followers {
  margin-top: -50px;
  margin-bottom: 3em;
}
select {
  font-family: "Inter", sans-serif;
  font-size: 1em;
  border: none;
  background-color: var(--bg);
  color: var(--textColor);
  &:focus {
    outline: none;
  }
  option {
    font-size: 0.9em;
  }
}

// Scroll Bar
::-webkit-scrollbar-track {
  //-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--bgCard);
}
</style>
