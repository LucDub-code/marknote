<script setup lang="ts">
  import { useSidebarStore } from '@/stores/sidebar'
  import SidebarToggle from './header/SidebarToggle.vue'
  import DocumentTitle from './header/DocumentTitle.vue'
  import DeleteButton from './header/DeleteButton.vue'
  import SaveButton from './header/SaveButton.vue'
  import AuthButton from './header/AuthButton.vue'

  const sidebar = useSidebarStore()
</script>

<template>
  <header>
    <SidebarToggle />
    <div class="container">
      <div class="container__left">
        <div class="brand">
          <img src="../assets/icons/marknote-logo.svg" alt="" class="brand__logo" />
          <img src="../assets/icons/marknote.svg" alt="MarkNote" class="brand__name" />
        </div>
        <DocumentTitle />
      </div>
      <div class="container__right" v-if="!sidebar.isOpen">
        <DeleteButton />
        <SaveButton />
        <AuthButton />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    background: var(--slate-800);
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;

    @media (max-width: 425px) {
      height: 56px;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      flex: 1;

      @media (max-width: 425px) {
        padding: 8px 16px;
      }

      &__left {
        display: flex;
        align-items: center;

        .brand {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-right: 24px;
          border-right: 4px solid var(--slate-500);

          @media (max-width: 425px) {
              display: none;
            }

          &__logo {
            width: 64px;
          }

          &__name {
            width: 144px;

            @media (max-width: 768px) {
              display: none;
            }
          }
        }
      }

      &__right {
        display: flex;
        align-items: center;
        gap: 24px;
      }
    }
  }
</style>