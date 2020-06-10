<template>
  <button
    class="button bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-full"
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
</style>
