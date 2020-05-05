<template>
  <div class="wraper">
    <div class="selector-container">
      <h2>Overview - Today</h2>
      <select
        class="social-media-selector"
        v-on:change="socialMediaChange($event)"
      >
        <option value="all">All</option>
        <option value="facebook">Facebook</option>
        <option value="twitter">Twitter</option>
        <option value="instagram">Instagram</option>
        <option value="youtube">YouTube</option>
      </select>
    </div>
    <div class="grid">
      <miniCard
        v-for="data in filteredSocialMedia"
        :key="data.id"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import miniCard from "./mini-card";
export default {
  name: "overview",
  components: { miniCard },
  data() {
    return {
      originalSocialMedia: [],
      socialMediSelected: "all"
    };
  },
  methods: {
    socialMediaChange(event) {
      this.socialMediSelected = event.target.value;
    }
  },
  computed: {
    filteredSocialMedia() {
      if (this.socialMediSelected.toLowerCase() === "all") {
        return this.originalSocialMedia;
      } else {
        return this.originalSocialMedia.filter(osm => {
          return osm.name
            .toLowerCase()
            .match(this.socialMediSelected.toLowerCase());
        });
      }
    }
  },
  mounted() {
    this.originalSocialMedia = this.$store.getters.overview;
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;

  @media screen and (min-width: $sm) and (max-width: $md) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: $md) and (max-width: $lg) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: $lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.selector-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  text-transform: capitalize;
}
</style>
