<template>
  <div class="admin-page container mx-auto py-32">
    <section>
      <h1>Admin</h1>
      <TheButton btnTitle="Create Bob" />
    </section>
    <section>
      <h1>Existing Posts</h1>
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import TheButton from "@/components/buttons/TheButton";

export default {
  components: {
    PostList,
    TheButton
  }
};
</script>

<style scoped>
</style>