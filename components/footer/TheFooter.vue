<template>
  <div id="footer" class="bg-gray-900">
    <div class="container mx-auto relative bottom-0">
      <div class="footer-menu-container flex justify-between items-end text-gray-500 py-32">
        <div class="flex-item">
          <ul class="flex flex-col">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div class="flex-item">
          <ul class="flex flex-col">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div class="flex-item">
          <ul class="flex flex-col">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <nuxt-link to="/">
          <img class="w-64" src="~/assets/images/logo_purple.png" alt />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  width: 100%;
  bottom: 0;
  position: relative;
}

.footer-menu-container {
}
</style>