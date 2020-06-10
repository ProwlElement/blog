<template>
  <div class="create-post-page container mx-auto">
    <section class="create-post-container">
      <form @submit.prevent="onSave" class="w-full max-w-sm flex justify-center pt-32">
        <div class="flex-column items-center mb-6">
          <AppControlInput v-model="editedPost.author"></AppControlInput>
          <AppControlInput v-model="editedPost.title"></AppControlInput>
          <AppControlInput v-model="editedPost.thumbnailLink"></AppControlInput>
          <AppControlInput control-type="textarea" v-model="editedPost.content"></AppControlInput>
          <AppButton type="submit">Save</AppButton>
          <AppButton
            type="button"
            style="hover:bg-red-600 text-red-600 border-red-600"
            @click="onCancel"
          >Cancel</AppButton>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      editedPost: {
        author: "",
        title: "",
        thumbnailLink: "",
        content: ""
      }
    };
  },
  methods: {
    onSave() {
      //create new post
      console.log(this.editedPost);
    },
    onCancel() {
      // go back to admin
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
</style>