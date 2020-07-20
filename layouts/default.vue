<template>
  <div>
    <!-- nav goes here -->
    <TheMenu @mobileToggle="showMobileMenu = !showMobileMenu" />
    <TheMobileMenu :show="showMobileMenu" @close="showMobileMenu = !showMobileMenu" />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheMenu from "@/components/menu/TheMenu";
import TheMobileMenu from "@/components/menu/TheMobileMenu";
import TheFooter from "@/components/footer/TheFooter";

export default {
  components: {
    TheMenu,
    TheMobileMenu,
    TheFooter
  },
  data() {
    return {
      showMobileMenu: false
    };
  }
};
</script>

<style>
html,
body {
  /* background-color: #454343; */
  color: azure;
}

h1 {
  @apply text-3xl;
  font-family: upgrade, sans-serif;
  font-weight: 500;
  font-style: normal;
}

h2 {
  @apply text-2xl;
  font-family: upgrade, sans-serif;
  font-weight: 500;
  font-style: normal;
}

h3 {
  @apply text-lg;
  font-family: upgrade-lights, sans-serif;
  font-weight: 400;
  font-style: normal;
}

p {
  font-family: upgrade, sans-serif;
  font-weight: 300;
  font-style: normal;
}

a {
  /* @apply text-blue-600 underline; */
}
</style>
