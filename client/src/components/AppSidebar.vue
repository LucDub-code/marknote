<script setup lang="ts">
  import { useSidebarStore } from '@/stores/sidebar'

  const sidebar = useSidebarStore()
</script>

<template>
  <div class="sidebar" :class="{ 'is-open': sidebar.isOpen }">

  </div>
</template>

<style scoped lang="scss">
  .sidebar {
    background-color: var(--slate-950);
    width: 0;
    height: 100%;
    overflow: hidden;
    transition: width 0.2s ease;
    
    &.is-open {
      width: 250px;
    }
  }
</style>