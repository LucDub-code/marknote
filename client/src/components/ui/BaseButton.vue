<script setup lang="ts"></script>

<template>
  <button type="button" class="base-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
  .base-button {
    cursor: pointer;
    background: var(--orange-600);
    color: var(--neutral-0);
    border: none;
    color: var(--slate-400);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      background: var(--orange-400);
    }
  }
</style>