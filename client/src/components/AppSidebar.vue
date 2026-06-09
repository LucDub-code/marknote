<script setup lang="ts">
  import { useSidebarStore } from '@/stores/sidebar'
  import NewDocumentButton from './sidebar/NewDocumentButton.vue';

  const sidebar = useSidebarStore()
</script>

<template>
  <div class="sidebar" :class="{ 'is-open': sidebar.isOpen }">
    <div class="sidebar__inner">
      <div class="sidebar__top">
        <h1 class="sidebar__title text-preset-6">Mes documents</h1>
        <NewDocumentButton />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .sidebar {
    width: 0;
    overflow: hidden;
    transition: width 0.2s ease;
    background: var(--slate-950);

    &.is-open {
      width: 250px;
    }

    &__inner {
      width: 250px; // largeur fixe = largeur ouverte
      height: 100%;
      padding: 24px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: space-between;
    }

    &__top {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &__title {
      color: var(--slate-400);
      text-transform: uppercase;
    }
  }
</style>