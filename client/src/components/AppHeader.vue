<script setup lang="ts">
  import MenuButton from './header/MenuButton.vue'
</script>

<template>
  <header>
    <MenuButton />
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
  }
</style>