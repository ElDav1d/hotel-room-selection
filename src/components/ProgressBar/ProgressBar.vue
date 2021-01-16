<template>
  <section class="ProgressBar">
    <h1 class="ProgressBar_Title">{{ title }}</h1>
    <p>Plan your perfect stay at our hotel</p>
    <img
      class="ProgressBar_Mock"
      src="../../assets/images/los-cocos-progress-mock.png"
      alt=""
    />
  </section>
</template>

<style lang="scss">
@import "./progress-bar.scss";
</style>

<script>
export default {
  name: "progress-bar",
  props: {
    title: {
      type: String,
      default: "This is your progress",
    },
  },
};
</script>
