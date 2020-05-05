<template>
  <article class="card" :class="'card-' + this.socialMedia.name">
    <p class="card-nick-name">
      <img :src="require(`@/assets/icon-${this.socialMedia.name}.svg`)" />
      {{ "@" + this.socialMedia.nickName }}
    </p>
    <p class="card-followers">
      <span>{{ this.socialMedia.totalFollowers | abbreviation }}</span>
      <span>followers</span>
    </p>
    <p class="card-new-followers-today" :style="{ color: isPositive }">
      <img
        v-if="this.socialMedia.followersToday >= 0"
        src="../assets/icon-up.svg"
      />
      <img v-else src="../assets/icon-down.svg" />
      {{ this.socialMedia.followersToday | removeMinusSymbol | abbreviation }}
      Today
    </p>
  </article>
</template>
<script>
export default {
  name: "cardFollowers",
  props: {
    socialMedia: Object
  },
  computed: {
    isPositive() {
      return this.socialMedia.followersToday >= 0
        ? "hsl(163, 72%, 41%)"
        : "hsl(356, 69%, 56%)";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/parent";
.card {
  padding: 1.7em 0;

  position: relative;
  overflow: hidden;

  text-align: center;

  background-color: var(--bgCard);
  border-radius: $br;
  &::before {
    content: "";

    display: block;
    height: 4px;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
@each $smName, $color in $socialMediaColors {
  .card-#{$smName}:before {
    background: $color;
  }
}
.card-nick-name,
.card-new-followers-today,
.card-followers span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-nick-name {
  @extend %title;
  img {
    margin-right: 7px;
  }
}
.card-followers {
  span:first-child {
    display: block;

    font-size: 50px;
    font-weight: 700;
  }
  span:last-child {
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 5px;
    color: var(--cardTitle);
  }
}
.card-new-followers-today {
  @extend %improvement;
  margin-top: 20px;

  img {
    margin-right: 7px;
  }
}
</style>
