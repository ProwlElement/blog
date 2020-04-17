<template>
  <div class="container">
    <nuxt-link to="/users">Users</nuxt-link>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
