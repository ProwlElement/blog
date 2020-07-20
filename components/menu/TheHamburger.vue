<template>
  <div class="hamburger-container" @click="$emit('toggle')">
    <button
      id="button"
      class="hamburger hamburger--3dx"
      type="button"
      @click="isActive = !isActive"
      :class="{'is-active': isActive }"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped>
.hamburger-container {
  margin: 0px 0;
}
.hamburger-container .hamburger-inner,
.hamburger-container .hamburger-inner::after,
.hamburger-container .hamburger-inner::before {
  background-color: white;
  height: 2px;
}

.hamburger {
  padding: 0;
}
</style>