<template>
  <div class="header-container">
    <header class="header container flex justify-between items-center mx-auto">
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.png" alt />
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <TheHamburger @toggle="$emit('mobileToggle')" />
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
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  z-index: 999999;
}

.logo img {
  height: 50px;
  margin: 10px 0;
}
.flex-item {
  margin-left: 20px;
}
</style>