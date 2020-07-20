<template>
  <div id="banner">
    <div class="container mx-auto relative bottom-0 bg-gray-500">
      <div class="hero-cta absolute right-0 flex flex-col justify-center">
        <h1 class="text-center">Easily search for the best software solutions near you.</h1>
        <AppButton @click="$router.push('/search')">Search Now</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppButton
  }
};
</script>

<style scoped>
#banner {
  height: 60vw;
  width: 100%;
  top: 0;
  overflow: visible;
  position: relative;
  background-image: url("~assets/svg/hero_bg.svg");
  background-position: center;
  background-size: cover;
}

.hero-cta {
  max-width: 400px;
  top: 15vw;
}

.hero-cta button {
  margin-top: 10px;
}
</style>