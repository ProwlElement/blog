<template>
  <div>
    <WideImageHero />
    <ImageText />
    <ThreeItems />
    <ImageText />
    <WidePattern />
  </div>
</template>

<script>
import WideImageHero from "@/components/Sections/WideImageHero";
import ImageText from "@/components/Sections/ImageText";
import ThreeItems from "@/components/Sections/ThreeItems";
import WidePattern from "@/components/Sections/WidePattern";

export default {
  components: {
    WideImageHero,
    ImageText,
    ThreeItems,
    WidePattern
  }
};
</script>

<style>
</style>
