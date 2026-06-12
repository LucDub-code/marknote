<script setup lang="ts">
  import '@/assets/hamburgers.scss'
  import { useSidebarStore } from '@/stores/sidebar'

  const sidebar = useSidebarStore()
</script>

<template>
  <div class="menu-button">
    <button 
      class="hamburger hamburger--squeeze" 
      type="button" 
      @click="sidebar.toggle" 
      :class="{ 'is-active': sidebar.isOpen }"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
  .menu-button {
    background: var(--slate-700);
    width: 72px;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--orange-600);
    }

    @media (max-width: 768px) {
      width: 56px;
    }
  }
</style>