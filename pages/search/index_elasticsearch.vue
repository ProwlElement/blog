<template>
  <div class="about-page flex flex-col justify-center items-center text-center">
    <section class="search-container py-32">Search Here</section>
    <section>
      <h1 class="text-white">Hello from Vendorconex 👋</h1>
      <!-- <ReactiveBase
        app="gitxplore-app"
        credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
        type="gitxplore-latest"
      >-->

      <ReactiveBase
        app="partner-search-k4k4hj4kh"
        credentials="HcGvQDLRN:cd2b5eb2-f976-4497-ba51-b04c6705ce1d"
      >
        <!-- search input -->
        <DataSearch
          componentId="repo"
          filterLabel="Search"
          :dataField="[
            'Name',
            'Category',
            'Website'
          ]"
          placeholder="Search Partners"
          iconPosition="left"
          :autosuggest="true"
          URLParams
          class="data-search-container results-container"
          :innerClass="{
            input: 'search-input' 
          }"
        />

        <MultiDropdownList
          componentId="category"
          data-field="Category.raw"
          placeholder="Select Category"
          title="Category"
          :innerClass="{
            select: 'dropdown-select',
            title: 'inner-title',
            list: 'dropdown-list'
          }"
        />

        <SelectedFilters class="m1" />
        <ReactiveList
          componentId="results"
          data-field="Name.raw"
          :pagination="true"
          :from="0"
          :size="6"
          :innerClass="{
                list: 'result-list-container',
                pagination: 'result-list-pagination',
                resultsInfo: 'result-list-info',
                poweredBy: 'powered-by'
              }"
          :react="{
                and: ['repo', 'category', 'website']
              }"
        >
          <div slot="renderResultStats" slot-scope="{ total, time }">
            <div class="flex justify-end">
              <h5>{{ total }} Results Found In {{ time }} Milliseconds</h5>
            </div>
          </div>
          <div slot="renderItem" slot-scope="{ item }">
            <div key="{{item.name}}" class="result-item">
              <div class="flex align-center result-card-header">
                <img class="avatar" :src="item.Logo_url" alt="User avatar" />
                <a class="link" :href="item.Website" target="_blank" rel="noopener noreferrer">
                  <div class="flex wrap">
                    <div>{{ item.Category }}/</div>
                    <div>{{ item.Name }}</div>
                  </div>
                </a>
              </div>
              <div class="m10-0">{{ item.description }}</div>
            </div>
          </div>
        </ReactiveList>

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
.result-list {
  margin-top: 60px;
}

.result-list-container {
  display: flex;
  background: chartreuse;
  width: 100%;
}

.result-list-info {
  margin: 1rem;
  justify-content: space-between;
}

.result-list-pagination {
  margin: 40px 0 50px;
}

.results-container .powered-by {
  display: none;
}

/* components */
.avatar {
  /* height: 50px; */
}

.btn {
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  text-align: center;
}

.card-btn {
  background: #eff3f6;
  min-width: 100px;
}

.card-btn:hover {
  background: #04d07d;
  color: white;
}

.link {
  cursor: pointer;
  color: mediumseagreen;
  text-decoration: none;
  font-weight: bold;
  margin-left: 20px;
  font-size: 1.2rem;
}

.topic {
  background: #06f393;
  margin: 3px;
  padding: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  min-width: 55px;
}

.topic:hover {
  background: #04d07d;
}

.topic.active {
  background: #04d07d;
}

.toggle-btn {
  color: #6a6969;
  border: 1px solid #6a6969;
  display: none;
  max-width: 200px;
  font-size: 1.3rem;
  align-self: center;
  padding: 10px;
  margin-top: 10px;
}

.toggle-btn:hover {
  color: #918f8f;
  border: 1px solid #918f8f;
}

.range-label {
  color: white;
}

.result-item {
  width: 30%;
  background: white;
}

.result-item:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

@media all and (max-width: 1200px) {
  .title {
    text-align: left;
  }

  .result-list {
    margin-top: 170px;
  }

  .navbar {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .navbar.active {
    height: 100vh;
  }

  .results-container {
    width: 100%;
  }

  .data-search-container {
    margin-top: 20px;
    right: 20px;
  }
}
</style>