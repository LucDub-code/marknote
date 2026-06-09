<script setup lang="ts">
  import DocumentListItem from './DocumentListItem.vue'
</script>

<template>
  <div class="list">
    <DocumentListItem />
    <DocumentListItem />
    <DocumentListItem />
  </div>
</template>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>