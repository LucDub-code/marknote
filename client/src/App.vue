<script setup lang="ts">
  import AppHeader from './components/AppHeader.vue'
  import AppSidebar from './components/AppSidebar.vue'
  import AppEditor from './components/AppEditor.vue'
</script>

<template>
  <div class="app">
    <AppSidebar />
    <div class="app__main">
      <AppHeader />
      <AppEditor />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .app {
    display: flex;
    height: 100vh;

    &__main {
      flex: 1;
    }
  }
</style>
