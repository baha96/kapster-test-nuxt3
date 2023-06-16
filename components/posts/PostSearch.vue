<script setup lang="ts">
import IconSearch from "@/components/shared/icons/IconSearch.vue";
const emit = defineEmits(["search:get"])
const searchText = ref("")
let searchTimer: NodeJS.Timeout | string | number | undefined

function sendSearchText() {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    console.log("send")
    emit("search:get", searchText.value)
  }, 400)
}
</script>

<template>
  <div class="post-search input-group">
    <label class="input-group-text" for="post-search">
      <IconSearch />
    </label>
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

</style>