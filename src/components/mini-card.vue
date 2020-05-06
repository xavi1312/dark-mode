<template>
  <article class="mini-card">
    <p class="mini-card__title">{{ this.data.title }}</p>
    <p class="mini-card__icon-container">
      <img :src="require(`@/assets/icon-${this.data.name}.svg`)" />
    </p>
    <p class="mini-card__total">{{ this.data.total | abbreviation }}</p>
    <p class="mini-card__number-today" :style="{ color: isPositive }">
      <span>
        <img v-if="this.data.improvement >= 0" src="../assets/icon-up.svg" />
        <img v-else src="../assets/icon-down.svg" />
        {{ this.data.improvement | removeMinusSymbol | abbreviation }}
        Today
      </span>
    </p>
  </article>
</template>

<script>
export default {
  name: "miniCard",
  props: {
    data: Object,
  },
  computed: {
    isPositive() {
      return this.data.improvement >= 0
        ? "hsl(163, 72%, 41%)"
        : "hsl(356, 69%, 56%)";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/parent";

.mini-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1em;

  padding: 1.7em;

  background-color: var(--bgCard);
  border-radius: $br;
}
p {
  margin: 0;
}
.mini-card__title {
  @extend %title;
}
.mini-card__icon-container,
.mini-card__number-today {
  text-align: right;
}

.mini-card__number-today {
  @extend %improvement;
  text-align: right;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  span {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 7px;
  }
}
.mini-card__total {
  display: block;

  font-size: 2.5em;
  font-weight: 700;
  line-height: 0.9;
}
</style>
