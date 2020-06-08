<template>
  <button
    class="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-full"
  >{{btnTitle}}</button>
</template>

<script>
export default {
  props: {
    btnTitle: String
  }
};
</script>

<style>
</style>