<script setup lang="ts">
interface IPropsData {
    tag: string,
}
defineProps<IPropsData>()
</script>

<template>
    <component :is="tag"><slot></slot></component>
</template>