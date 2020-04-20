<template>
  <div class="mobile-menu-container h-screen bg-gray-900">
    <div class="overlay h-screen w-screen bg-gray-900 z-40"></div>
    <div class="flex flex-col justify-center h-screen items-center mx-auto text-4xl relative z-50">
      <nuxt-link to="/users">Users</nuxt-link>
      <nuxt-link to="/posts">Posts</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: absolute;
  opacity: 0.7;
  top: 0;
}
.mobile-menu-container {
  /* position: absolute; */
  max-width: 300px;
}
</style>