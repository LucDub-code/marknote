<script setup lang="ts">
  import DocumentListItem from './DocumentListItem.vue'
</script>

<template>
  <ul class="list">
    <DocumentListItem />
    <DocumentListItem />
    <DocumentListItem />
  </ul>
</template>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>