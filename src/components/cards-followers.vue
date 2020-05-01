<template>
  <div class="wraper">
    <div class="grid">
      <cardFollowers
        v-for="socialMedia in this.$store.getters.cards"
        :key="socialMedia.id"
        :socialMedia="socialMedia"
      />
    </div>
  </div>
</template>

<script>
import cardFollowers from "./card-followers";
export default {
  name: "cardsFollowers",
  components: { cardFollowers }
};
</script>  
<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;

  @media screen and (min-width: 540px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>