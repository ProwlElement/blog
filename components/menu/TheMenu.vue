<template>
  <div class="header-container">
    <header class="header container flex justify-between items-center mx-auto">
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/images/logo_purple.png" alt />
        </nuxt-link>
      </div>

      <div class="flex justify-center">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>

        <nuxt-link to="/posts">Posts</nuxt-link>
        <nuxt-link to="/admin">Admin</nuxt-link>
        <!-- <TheHamburger @toggle="$emit('mobileToggle')" /> -->
      </div>
    </header>
  </div>
</template>

<script>
import TheHamburger from "@/components/menu/TheHamburger";
export default {
  components: {
    TheHamburger
  }
};
</script>

<style>
.header-container {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 999999;
}

.logo img {
  height: 30px;
  margin: 0px 0;
}
.flex-item {
  margin-left: 20px;
}
</style>