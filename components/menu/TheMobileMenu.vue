<template>
  <div class="mobile-menu-container h-screen z-40">
    <transition name="fade">
      <div v-if="show" class="overlay h-screen w-screen bg-gray-900 z-40" @click="$emit('close')"></div>
    </transition>
    <transition name="slide">
      <div
        v-if="show"
        class="link-container flex flex-col justify-center h-screen items-center mx-auto text-2xl relative bg-gray-900 z-50"
        :class="{'animate-menu': show}"
        @click="$emit('close')"
      >
        <nuxt-link to="/users">Users</nuxt-link>
        <nuxt-link to="/posts">Posts</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TheMobileMenu",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.overlay {
  position: absolute;
  opacity: 0.7;
  top: 0;
}

.overlay.hide {
  opacity: 0;
}

.mobile-menu-container {
  position: fixed;
  /* max-width: 300px; */
}

.link-container {
  width: 300px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.15s ease-in-out;
  /* transform: translateX(300px); */
}

.slide-enter {
  transform: translateX(-100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

a.nuxt-link-active {
  color: green;
}
</style>