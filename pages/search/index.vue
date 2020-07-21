<template>
  <div class="container mx-auto mt-32">
    <ais-instant-search-ssr
      :search-client="searchClient"
      index-name="test_PARTNERS"
      :routing="routing"
    >
      <ais-search-box
        placeholder="e.g. Salesforce, CRM"
        :classNames="{
          'ais-SearchBox': 'w-64',
          'ais-SearchBox-input': 'border-2 border-gray-700 rounded-full p-2 px-4 text-lg',
          'ais-SearchBox-submit': 'hidden',
          'ais-SearchBox-reset': 'hidden'
        }"
      />

      <ais-state-results>
        <div slot-scope="{ query }">
          <div v-if="query.length">
            <!-- STATS -->
            <ais-stats>
              <h1
                class="text-md mb-10 text-gray-700"
                slot-scope="{ nbHits }"
              >Found {{ nbHits }} results</h1>
            </ais-stats>
            <!-- DISPLAY HITS -->
            <ais-hits>
              <div slot="item" slot-scope="{ item }">
                <AppSearchCard :item="item" />
              </div>
            </ais-hits>
            <!-- PAGNATION -->
            <ais-pagination />
          </div>
          <div v-else>
            <div class="bg-grey-200 w-full h-screen flex justify-center align-center">
              <h1
                class="mt-8 text-gray-700"
              >Find the perfect technical software provider for your business.</h1>
              <img class="pb-64" src="~/assets/svg/search.svg" alt />
            </div>
          </div>
        </div>
      </ais-state-results>
    </ais-instant-search-ssr>
  </div>
</template>

<script>
import {
  AisInstantSearchSsr,
  AisIndex,
  AisConfigure,
  AisRefinementList,
  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  AisPagination,
  createServerRootMixin,
  AisStateResults
} from "vue-instantsearch"; // eslint-disable-line import/no-unresolved
import algoliasearch from "algoliasearch/lite";
import AppSearchCard from "@/components/UI/AppSearchCard";
import { history as historyRouter } from "instantsearch.js/es/lib/routers";
import { singleIndex as singleIndexMapping } from "instantsearch.js/es/lib/stateMappings";

const searchClient = algoliasearch(
  "0ON7BV9ERS",
  "6745ff1275828f2e71d55f527a12274f"
);

export default {
  mixins: [
    createServerRootMixin({
      searchClient,
      routing: {
        router: historyRouter(),
        stateMapping: singleIndexMapping("test_PARTNERS")
      },
      indexName: "test_PARTNERS"
    })
  ],
  serverPrefetch() {
    return this.instantsearch.findResultsState(this).then(algoliaState => {
      this.$ssrContext.nuxt.algoliaState = algoliaState;
    });
  },
  beforeMount() {
    const results = window.__NUXT__.algoliaState;
    this.instantsearch.hydrate(results);
  },
  components: {
    AisInstantSearchSsr,
    AisIndex,
    AisConfigure,
    AisRefinementList,
    AisHits,
    AisHighlight,
    AisSearchBox,
    AisStats,
    AisPagination,
    AisStateResults,
    AppSearchCard
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://unpkg.com/instantsearch.css@7.1.0/themes/algolia-min.css"
        }
      ]
    };
  }
};
</script>

<style>
.ais-Hits-list {
  text-align: left;
}
.ais-Hits-list:empty {
  margin: 0;
}
.ais-InstantSearch {
  margin: 1em;
}
</style>