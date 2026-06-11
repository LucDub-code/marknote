<script setup lang="ts">
  import { useModalStore } from '@/stores/modal'
  import AppHeader from './components/AppHeader.vue'
  import AppSidebar from './components/AppSidebar.vue'
  import AppEditor from './components/AppEditor.vue'
  import BaseOverlay from './components/ui/BaseOverlay.vue'

  const modal = useModalStore()
</script>

<template>
  <div class="app">
    <AppSidebar />
    <div class="app__main">
      <AppHeader />
      <AppEditor />
    </div>
  </div>
  <BaseOverlay v-if="modal.isDeleteOpen" @click="modal.close" />
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
