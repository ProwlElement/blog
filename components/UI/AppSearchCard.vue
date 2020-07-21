<template>
  <div>
    <h2>{{ item.Name }}</h2>
    <h3>{{item.Country}}</h3>
    <p>{{item.Category}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
</style>