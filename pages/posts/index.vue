<template>
  <div>
    <div id="banner">
      <div class="container mx-auto relative bottom-0">
        <h1>Stay up to date with the lates news in software vendors and technology</h1>
      </div>
    </div>
    <div class="posts-page container flex flex-col justify-center items-center mx-auto">
      <section class="featured-posts flex flex-col sm:flex-row flex-wrap w-full p-2">
        <PostPreview
          id="1"
          thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
          title="Test Post One"
          previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et congue nibh. Duis a dolor pretium, bibendum sem in, sodales ipsum. Fusce vestibulum lorem sed leo pretium, accumsan luctus orci iaculis."
        />
        <PostPreview
          id="2"
          thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
          title="Test Post Two"
          previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et congue nibh. Duis a dolor pretium, bibendum sem in, sodales ipsum. Fusce vestibulum lorem sed leo pretium, accumsan luctus orci iaculis."
        />
        <PostPreview
          id="3"
          thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
          title="Test Post Three"
          previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et congue nibh. Duis a dolor pretium, bibendum sem in, sodales ipsum. Fusce vestibulum lorem sed leo pretium, accumsan luctus orci iaculis."
        />
        <PostPreview
          id="4"
          thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
          title="Test Post Four"
          previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et congue nibh. Duis a dolor pretium, bibendum sem in, sodales ipsum. Fusce vestibulum lorem sed leo pretium, accumsan luctus orci iaculis."
        />
      </section>
    </div>
  </div>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview";
export default {
  components: {
    PostPreview
  }
};
</script>

<style scoped>
#banner {
  height: 30vw;
  width: 100%;
  top: 0;
  position: relative;
  background-image: url("~assets/images/bg.webp");
  background-position: center;
  background-size: cover;
}

#banner > div > h1 {
  padding-top: 15vw;
}
</style>