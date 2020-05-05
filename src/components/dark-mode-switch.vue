<template>
  <div>
    <input type="checkbox" id="checkbox" @change="darkMode" />
    <label class="switch" for="checkbox"></label>
  </div>
</template>

<script>
export default {
  name: "darkModeSwitch",
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    darkMode() {
      const bodyClassList = document.body.classList;
      if (this.isDarkMode) {
        bodyClassList.remove("dark-theme");
      } else {
        bodyClassList.add("dark-theme");
      }
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  display: none;
  &:checked ~ .switch::before {
    transform: translateX(0);
  }
}
.switch {
  display: block;

  width: 80px;
  height: 40px;

  padding: 5px;

  border-radius: 20px;
  background: var(--switch);

  cursor: pointer;
  user-select: none;

  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;

    border-radius: 50%;
    background-color: var(--switchSpinner);

    transform: translateX(40px);
    transition: 0.3s;
  }
}
</style>
