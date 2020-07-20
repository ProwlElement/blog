<template>
  <button
    class="button bg-transparent hover:bg-white text-white font-semibold hover:text-gray-900 py-3 px-16 border border-white hover:border-transparent rounded-full"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: "Submit"
    }
  }
};
</script>


<style scoped>
.cancel {
  /* @apply bg-red-600 border-red-600; */
}

button {
  max-width: 250px;
}
</style>
