<script setup>
import PostSearch from "@/components/posts/PostSearch.vue";
import PostCard from "@/components/posts/PostCard.vue";
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts'
const store = usePostsStore()
const { getPosts } = storeToRefs(store)
const searchText = ref(null)

const content = computed(() => {
  console.log(getPosts, searchText)
  if (searchText) {
    return searchContent(getPosts.value, searchText)
  } else {
    return getPosts.value
  }
})

function searchContent(arr, text) {
  console.log(arr, text)
  return arr
}

</script>

<template>
  <h1 class="mb-4">Список новостей</h1>
  <PostSearch class="mb-4" @search:get="searchText = $event" />
  <div class="row posts">
    <div v-for="post in content" :key="'post-id-' + post.id" class="col col-sm-4 mb-3">
      <PostCard :post="post" />
    </div>
  </div>
</template>