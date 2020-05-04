<template>
  <div>
    <WideImageText />
    <div class="posts-page container flex flex-col justify-center items-center mx-auto">
      <PostList />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import WideImageText from "@/components/banners/WideImageText";

export default {
  components: {
    PostList,
    WideImageText
  }
};
</script>

<style scoped>
</style>