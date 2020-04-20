<template>
  <div class="hamburger-container">
    <button class="hamburger hamburger--3dx" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hamburger-container {
  margin: 10px 0;
}
.hamburger-container .hamburger-inner,
.hamburger-container .hamburger-inner::after,
.hamburger-container .hamburger-inner::before {
  background-color: white;
  height: 2px;
}
</style>