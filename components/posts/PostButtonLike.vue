<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts'

import IconLike from "~/components/shared/icons/IconLike.vue";

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
    <IconLike :fill="getCurrentPostIsLike ? '#dc3545' : '#585c5e'" />
    <span>
      {{ getCurrentPostLikesCount || '0' }}
      Нравиться
    </span>
  </button>
</template>

<style scoped lang="scss">
.button-like {
  background-color: transparent;
  border: 0;
  transition: 300ms;
  span {
    margin-left: 8px;
  }
  &:hover {
    opacity: 0.7
  }
}
</style>