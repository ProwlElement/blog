<template>
  <div class="admin-page container mx-auto py-32">
    <section>
      <button
        class="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-full"
      >Create Post</button>
    </section>
    <section>
      <h1>Existing Posts</h1>
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: {
    PostList
  }
};
</script>

<style scoped>
</style>