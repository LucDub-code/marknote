<script setup lang="ts">
  import { useThemeStore } from '@/stores/theme'

  const theme = useThemeStore()
</script>

<template>
  <div class="toggle__container">
    <img class="toggle__icon" src="../../assets/icons/moon-icon.svg" alt="" aria-hidden="true" />
    <button
      type="button"
      class="toggle__slider"
      role="switch"
      :aria-checked="theme.theme === 'light'"
      aria-label="Changer de thème"
      @click="theme.set(theme.theme === 'light' ? 'dark' : 'light')"
    >
      <span class="toggle__circle" :class="{ 'is-light': theme.theme === 'light' }" />
    </button>
    <img class="toggle__icon" src="../../assets/icons/sun-icon.svg" alt="" aria-hidden="true" />
  </div>
</template>

<style scoped lang="scss">
  .toggle {

    &__container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__slider {
      width: 48px;
      height: 24px;
      border-radius: 16px;
      background: var(--slate-500);
      padding: 6px;
      border: none;
      cursor: pointer;
    }

    &__circle {
      display: block;
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