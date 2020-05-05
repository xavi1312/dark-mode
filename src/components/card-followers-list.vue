<template>
  <div class="wraper">
    <div class="grid">
      <cardFollowers
        v-for="socialMedia in this.$store.getters.socialMediaFollowers"
        :key="socialMedia.id"
        :socialMedia="socialMedia"
      />
    </div>
  </div>
</template>

<script>
import cardFollowers from "./card-followers";
export default {
  name: "cardFollowersList",
  components: { cardFollowers },
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
</style>
