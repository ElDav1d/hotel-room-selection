<template>
  <nav class="MainNavigation">
    <ul class="MainNavigation_List">
      <li class="MainNavigation_ListItem">
        <router-link to="/">Home</router-link>
      </li>
      <li class="MainNavigation_ListItem">
        <router-link to="/">Rooms</router-link>
      </li>
      <li class="MainNavigation_ListItem">
        <router-link to="/">Restaurant</router-link>
      </li>
      <li class="MainNavigation_ListItem-logo">
        <router-link to="/">
          <img
            src="../../../assets/images/los-cocos-logo-header.jpg"
            alt="Los Cocos Bungalows"
          />
        </router-link>
      </li>
      <li class="MainNavigation_ListItem">
        <router-link to="/">Weddings</router-link>
      </li>
      <li class="MainNavigation_ListItem">
        <router-link to="/">Membership</router-link>
      </li>
      <li class="MainNavigation_ListItem">
        <router-link to="/">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "main-navigation.scss";
</style>
