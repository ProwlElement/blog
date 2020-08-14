<template>
  <div class="flex justify-between">
    <div class="bg-gray-600 w-16 h-16">
      <img :src="item.Logo" class="logo w-16 h-16 rounded-full" />
    </div>
    <div>
      <h2>{{item.Name}}</h2>
      <p>{{item.Category}}</p>
    </div>
  </div>
</template>

<script>
import AisHighlight from "vue-instantsearch";
export default {
  components: {
    AisHighlight,
  },
  props: {
    item: {
      required: true,
      type: Object,
    },
    hit: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.logo {
  display: block;
}
</style>