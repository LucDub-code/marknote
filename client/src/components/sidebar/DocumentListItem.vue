<script setup lang="ts"></script>

<template>
  <li class="document">
    <img src="../../assets/icons/file-icon.svg" alt="" class="document__icon" />
    <div class="document__text">
      <span class="document__date text-preset-9">9 juin 2026</span>
      <button type="button" class="document__name text-preset-6">welcome.md</button>
    </div>
  </li>
</template>

<style scoped lang="scss">
  .document {
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

    &__date {
      color: var(--slate-400)
    }

    &__name {
      background: none;
      border: none;
      padding: 0;
      color: var(--neutral-0);
      cursor: pointer;

      &:hover {
        color: var(--orange-600);
      }
    }
  }
</style>