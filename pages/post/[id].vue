<script setup lang="ts">
// Import core
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'

// Import components
import PostButtonLike from "@/components/posts/PostButtonLike.vue";
import DefaultTitle from "@/components/shared/typography/DefaultTitle.vue";

import { parseDate } from "@/utils";

const store = usePostsStore()
const { getCurrentPost, isPostLoadError } = storeToRefs(store)
const { getPostById, clearCurrentPost } = store
const route = useRoute();

// fetch current
getPostById(+route.params.id)

// clear store for current post
onBeforeUnmount(() => {
  clearCurrentPost()
})
</script>

<template>
  <div class="post-item">
    <!-- Error msg   -->
    <div v-if="isPostLoadError" class="alert alert-danger" role="alert">
      Unknown id post
    </div>

    <template v-else-if="getCurrentPost">

      <!-- Title     -->
      <DefaultTitle tag="h1">
        {{ getCurrentPost.title }}
      </DefaultTitle>

      <!-- Head info post     -->
      <div class="card-text d-flex align-items-center mb-4">
        <!-- Date published      -->
        <span class="text-body-secondary me-2">{{ parseDate(getCurrentPost.published_at) }}</span>
        <!-- Count likes post      -->
        <PostButtonLike />
      </div>

      <!-- Content     -->
      <div class="post-item__content" v-html="getCurrentPost.content"></div>

      <!-- Image     -->
      <img :src="getCurrentPost.image_preview" class="img-fluid" :alt="getCurrentPost.title">
    </template>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/modules/themes";
.post-item {
  &__content:deep {
    blockquote {
      padding-top: 4px;
      border-left: 3px solid $gray-400;
      padding-left: $blockquote-margin-y;
      margin-bottom: $blockquote-margin-y;
      padding-bottom: 4px;
    }
  }
}
</style>