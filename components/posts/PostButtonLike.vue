<script setup lang="ts">
// Import core
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'

// Import Icons
import IconLike from "@/components/shared/icons/IconLike.vue";

const store = usePostsStore()
const { getCurrentPostIsLike, getCurrentPostLikesCount } = storeToRefs(store)

const { togglePostLike } = store
</script>

<template>
  <button
      type="button"
      class="button-like d-flex align-items-center"
      :class="{
        'text-danger': getCurrentPostIsLike,
        'text-secondary': !getCurrentPostIsLike
      }"
      @click="togglePostLike"
  >
    <!-- Icons   -->
    <IconLike :fill="getCurrentPostIsLike ? '#dc3545' : '#585c5e'" />

    <!-- Text   -->
    <span>
      {{ getCurrentPostLikesCount || '0' }}
      Нравится
    </span>

  </button>
</template>

<style scoped lang="scss">
.button-like {
  background-color: transparent;
  border: 0;
  transition: 300ms;

  &:hover {
    opacity: 0.7
  }

  span {
    margin-left: 8px;
  }
}
</style>
