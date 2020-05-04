<template>
  <div class="about-page flex flex-col justify-center items-center text-center">
    <section class="search-container py-32">Search Here</section>
    <section>
      <h1 class="text-white">Hello from Vendorconex 👋</h1>
      <ReactiveBase
        app="partner-search-k4k4hj4kh"
        credentials="HcGvQDLRN:cd2b5eb2-f976-4497-ba51-b04c6705ce1d"
      >
        <div class="filters-container">
          <!-- <DataSearch
            componentId="search"
            data-field="{[
				    'Category',
				    'Category.autosuggest',
				    'Category.keyword'
				  ]}"
          />-->

          <MultiList
            componentId="Authors"
            data-field="Category.raw"
            class="filter text-white"
            title="Select Authors"
            selectAllLabel="All Authors"
          />
        </div>

        <ReactiveList
          :pagination="true"
          :from="0"
          :size="5"
          :react="{ and: ['Name', 'Category'] }"
          componentId="results"
          data-field="Name.raw"
          paginationAt="bottom"
          loader="Loading Results.."
          sortBy="desc"
          class="text-white"
        >
          <div slot="renderItem" slot-scope="{ item }">
            <div class="flex book-content" key="item._id">
              <img :src="item.Logo_url" alt="Book Cover" class="book-image" />
            </div>
          </div>
        </ReactiveList>
      </ReactiveBase>
    </section>
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>

<style scoped>
</style>