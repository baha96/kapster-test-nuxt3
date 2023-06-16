<script setup lang="ts">
import PostButtonLike from "~/components/posts/PostButtonLike.vue";
import {parseDate} from "~/utils";
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts'
const store = usePostsStore()
const { getPostById, clearCurrentPost } = store
const route = useRoute();
const { getCurrentPost, isPostLoadError } = storeToRefs(store)

getPostById(+route.params.id)

onBeforeUnmount(() => {
  clearCurrentPost()
})
</script>

<template>
  <div class="post-item">
    <div v-if="isPostLoadError" class="alert alert-danger" role="alert">
      Unknown id post
    </div>
    <template v-else-if="getCurrentPost">
      <h1>{{ getCurrentPost.title }}</h1>
      <div class="card-text d-flex align-items-center mb-4">
        <span class="text-body-secondary me-2">{{ parseDate(getCurrentPost.published_at) }}</span>
        <PostButtonLike />
      </div>
      <div class="post-item__content" v-html="getCurrentPost.content"></div>
      <img :src="getCurrentPost.image_preview" class="img-fluid" :alt="getCurrentPost.title">
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/modules/themes";
.post-item {
  &__content {
    &:deep {
      blockquote {
        padding-top: 4px;
        border-left: 3px solid $gray-400;
        padding-left: $blockquote-margin-y;
        margin-bottom: $blockquote-margin-y;
        padding-bottom: 4px;
      }
    }

  }
}
</style>