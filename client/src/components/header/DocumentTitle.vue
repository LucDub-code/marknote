<script setup lang="ts"></script>

<template>
  <div class="document">
    <img src="../../assets/icons/file-icon.svg" alt="" class="document__icon" />
    <div class="document__text">
      <span class="document__label text-preset-9">Document Name</span>
      <span class="document__name text-preset-6">welcome.md</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .document {
    padding-left: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    &__icon {
      width: 16px;
    }
    &__text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: flex-start;
    }
    &__label {
      color: var(--slate-400)
    }
    &__name {
      color: var(--neutral-0)
    }
  }
</style>