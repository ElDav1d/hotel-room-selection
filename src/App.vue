<template>
  <div id="app">
    <main-navigation />
    <router-view />
  </div>
</template>

<script>
import MainNavigation from "./components/MainNavigation/MainNavigation.vue";

export default {
  name: "app",
  components: {
    MainNavigation,
  },
};
</script>

<style lang="scss">
@import "./assets/stylesheets/styles.scss";
</style>
