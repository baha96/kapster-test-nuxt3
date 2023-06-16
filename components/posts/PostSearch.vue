<script setup lang="ts">
// Import components
import IconSearch from "@/components/shared/icons/IconSearch.vue";

let searchTimer: NodeJS.Timeout | string | number | undefined
const emit = defineEmits(["search:get"])
const searchText = ref("")

/*
*
* Emit value to parent with debounce
* @returns {void}
*
* */
function sendSearchText() {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    emit("search:get", searchText.value)
  }, 400)
}
</script>

<template>
  <div class="post-search input-group">

    <!-- Icon   -->
    <label class="input-group-text" for="post-search">
      <IconSearch />
    </label>

    <!-- Input   -->
    <input
        type="text"
        v-model="searchText"
        class="form-control"
        id="post-search"
        placeholder="Поиск"
        aria-label="Поиск"
        @input="sendSearchText"
    >
  </div>
</template>

<style scoped lang="scss">
.post-search {
  label {
    cursor: pointer;
  }
}
</style>