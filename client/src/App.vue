<script setup lang="ts">
  import { useModalStore } from '@/stores/modal'
  import AppHeader from './components/AppHeader.vue'
  import AppSidebar from './components/AppSidebar.vue'
  import AppEditor from './components/AppEditor.vue'
  import BaseOverlay from './components/ui/BaseOverlay.vue'
  import DeleteDocumentModal from './components/modals/DeleteDocumentModal.vue'
  import AuthModal from './components/modals/AuthModal.vue'

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
  <BaseOverlay v-if="modal.active" @click.self="modal.close">
    <DeleteDocumentModal v-if="modal.active === 'delete'" />
    <AuthModal v-else-if="modal.active === 'auth'" />
  </BaseOverlay>
</template>

<style lang="scss" scoped>
  .app {
    display: flex;
    height: 100vh;
    overflow: hidden;

    &__main {
      flex: 0 0 100%;
    }
  }
</style>
