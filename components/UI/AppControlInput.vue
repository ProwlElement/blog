<template>
  <div class="input-control">
    <label>
      <slot />
    </label>
    <input
      class="block text-gray-500 font-bold md:text-right mb-2"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      class="block text-gray-500 font-bold md:text-right mb-2"
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "AppControlInput",
  props: {
    controlType: {
      type: String,
      default: "input"
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
</style>


