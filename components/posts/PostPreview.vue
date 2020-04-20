<template>
  <nuxt-link :to="'/posts/'+id" class="nuxt-link w-full sm:w-1/2 p-2">
    <article class="post-preview bg-gray-900">
      <div class="post-thumbnail" :style="{backgroundImage: 'url('+thumbnail+')' }"></div>
      <div class="post-content p-4">
        <h1>{{title}}</h1>
        <p>{{previewText}}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.nuxt-link {
}

.post-preview {
}

.post-thumbnail {
  height: 200px;
  width: 100%;
  -webkit-filter: grayscale(60%);
}
</style>
