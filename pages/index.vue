<script setup>
// Import core
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'

// Imports components
import DefaultTitle from "@/components/shared/typography/DefaultTitle.vue";
import PostSearch from "@/components/posts/PostSearch.vue";
import PostCard from "@/components/posts/PostCard.vue";

const store = usePostsStore()
const { getPosts } = storeToRefs(store)
const searchText = ref(null)


const content = computed(() => {
  if (searchText.value) {
    return searchPosts(getPosts.value, searchText.value)
  } else {
    return getPosts.value
  }
})

/*
*
* @param {array} - this is posts from store
* @param {text} - this is text from search input
* @returns {array} posts
*
* */
function searchPosts(arr, text) {
  const result = []
  for (let j=0; j < arr.length; j++) {
    const post = arr[j]
    if (post?.title?.match(text)) result.push(post);
  }
  return result
}

</script>

<template>
  <!-- Title -->
  <DefaultTitle tag="h1" class="mb-3">
    Список новостей
  </DefaultTitle>

  <!-- Search input  -->
  <PostSearch
      class="mb-5"
      @search:get="searchText = $event"
  />

  <!-- Posts list  -->
  <div class="row posts">
    <div
        v-for="post in content"
        :key="'post-id-' + post.id"
        class="col col-sm-4 mb-3"
    >
      <PostCard :post="post" />
    </div>
  </div>
</template>