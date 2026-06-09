<script setup lang="ts">
  import SidebarToggle from './header/SidebarToggle.vue'
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
        </div>
        <div class="container__right">

        </div>
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
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      flex: 1;
      &__left {
        display: flex;
        align-items: center;
        .brand{
          display: flex;
          align-items: center;
          gap: 24px;
          padding-right: 24px;
          border-right: 4px solid var(--slate-500);
          &__logo {
            width: 88px;
          }
          &__name {
            width: 248px;
          }
        }
      }
      &__right {
        display: flex;
        align-items: center;
      }
    }
  }
</style>