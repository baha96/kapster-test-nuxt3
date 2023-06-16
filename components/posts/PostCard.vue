<script setup lang="ts">
// Import components
import DefaultTitle from "~/components/shared/typography/DefaultTitle.vue";
import DefaultParagraphs from "~/components/shared/typography/DefaultParagraphs.vue";

import { Post } from "@/types/posts";
import { parseDate } from "@/utils"

const props = defineProps<{
  post: Post
}>()

const postUrl: string = `/post/${props.post.id}`
</script>

<template>
  <div v-if="post" class="posts-card card">

    <!-- Image   -->
    <img
        :src="post.image_preview"
        class="card-img-top posts-card__image ratio-4x3"
        :alt="post.title"
    />

    <!-- Content    -->
    <div class="card-body d-flex flex-column">

      <!-- Title     -->
      <DefaultTitle tag="h5" class="posts-card__title card-title">
        <nuxt-link :to="postUrl">
          {{ post.title }}
        </nuxt-link>
      </DefaultTitle>

      <!-- Date published    -->
      <DefaultParagraphs class="card-text">
        <small class="text-body-secondary">{{ parseDate(post.published_at) }}</small>
      </DefaultParagraphs>

      <!-- Link     -->
      <nuxt-link :to="postUrl" class="btn btn-secondary">Подробнее</nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.posts-card {
  height: 100%;

  &__image {
    max-height: 250px;
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  &__title {
    flex-grow: 1;

    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
}
</style>