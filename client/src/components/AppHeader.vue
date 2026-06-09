<script setup lang="ts">
  import SidebarToggle from './header/SidebarToggle.vue'
</script>

<template>
  <header>
    <SidebarToggle />
    <div class="header__right">

    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    background-color: var(--slate-800);
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px
    }
  }
</style>