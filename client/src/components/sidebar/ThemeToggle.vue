<script setup lang="ts">
  import { useThemeStore } from '@/stores/theme'

  const theme = useThemeStore()
</script>

<template>
  <div class="toggle__container">
    <button class="toggle__button" @click="theme.set('dark')">
      <img src="../../assets/icons/moon-icon.svg" alt="Thème sombre" />
    </button>
    <div class="toggle__slider">
      <div class="toggle__circle" :class="{ 'is-light': theme.theme === 'light' }" />
    </div>
    <button class="toggle__button" @click="theme.set('light')">
      <img src="../../assets/icons/sun-icon.svg" alt="Thème clair" />
    </button>
  </div>
</template>

<style scoped lang="scss">
  .toggle {

    &__container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__button {
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }

    &__slider {
      width: 48px;
      height: 24px;
      border-radius: 16px;
      background: var(--slate-500);
      padding: 6px;
    }

    &__circle {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--neutral-0);
      transition: transform 0.2s ease;

      &.is-light {
        transform: translateX(24px);
      }
    }
  }
</style>