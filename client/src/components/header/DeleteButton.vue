<script setup lang="ts">
  import TrashIcon from '../ui/TrashIcon.vue'
</script>

<template>
  <button type="button" class="delete-button">
    <TrashIcon />
  </button>
</template>

<style scoped lang="scss">
  .delete-button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: var(--slate-400);

    &:hover {
      color: var(--orange-600);
    }
  }
</style>