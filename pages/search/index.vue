<template>
  <div class="about-page flex flex-col justify-center items-center text-center">
    <section class="search-container py-32">Search Here</section>
    <section>
      <h1 class="text-white">Hello from Vendorconex 👋</h1>
      <ReactiveBase
        app="gitxplore-app"
        credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
        type="gitxplore-latest"
      >
        <!-- search input -->
        <DataSearch
          componentId="repo"
          filterLabel="Search"
          :dataField="[
            'name',
            'description',
            'name.raw',
            'fullname',
            'owner',
            'topics'
          ]"
          placeholder="Search Repos"
          iconPosition="left"
          :autosuggest="true"
          URLParams
          class="data-search-container results-container"
          :innerClass="{
            input: 'search-input'
          }"
        />
        <!-- filter -->
        <MultiDropdownList
          componentId="language"
          data-field="language.raw"
          placeholder="Select languages"
          title="Language"
          filterLabel="Language"
          :innerClass="{
          select: 'dropdown-select',
          title: 'inner-title',
          list: 'dropdown-list'
        }"
        />
        <!-- range slider -->
        <RangeSlider
          data-field="stars"
          componentId="stars"
          title="Repo Stars"
          :range="{
            start: 0,
            end: 300000
          }"
          :defaultSelected="{
            start: 0,
            end: 300000
          }"
          :innerClass="{
            title: 'inner-title',
            slider: 'inner-slider-ui'
          }"
          :rangeLabels="{
            start: '0',
            end: '300K'
          }"
        />
        <!-- Output -->
      </ReactiveBase>
    </section>
  </div>
</template>

<script>
export default {
  name: "Reactive",
  components: {},
  data() {
    return {
      currentTopics: []
    };
  },

  methods: {
    setTopics(currentTopics) {
      this.currentTopics = currentTopics || [];
    },
    toggleTopic(topic) {
      const Topics = this.currentTopics;
      const nextState = Topics.includes(topic)
        ? Topics.filter(item => item !== topic)
        : Topics.concat(topic);
      this.currentTopics = nextState;
    }
  }
};
</script>

<style scoped>
</style>