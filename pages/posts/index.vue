<template>
  <div>
    <WideImageHero />
    <div class="posts-page container flex flex-col justify-center items-center mx-auto">
      <PostList />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import WideImageHero from "@/components/Sections/WideImageHero";

export default {
  components: {
    PostList,
    WideImageHero
  }
};
</script>

<style scoped>
</style>