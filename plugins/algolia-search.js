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
  createServerRootMixin
} from "vue-instantsearch"; // eslint-disable-line import/no-unresolved
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "0ON7BV9ERS",
  "6745ff1275828f2e71d55f527a12274f"
);

export default {
  mixins: [
    createServerRootMixin({
      searchClient,
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
    AisPagination
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


