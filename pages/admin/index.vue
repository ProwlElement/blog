<template>
  <div class="admin-page container mx-auto py-32">
    <section>
      <h1>Admin</h1>
      <AppButton @click="$router.push('/admin/create-post')">Create New Post</AppButton>
    </section>
    <section>
      <h1>Existing Posts</h1>
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    PostList,
    AppButton
  }
};
</script>

<style scoped>
</style>