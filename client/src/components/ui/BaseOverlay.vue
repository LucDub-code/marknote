<script setup lang="ts"></script>

<template>
  <div class="overlay">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .overlay {
    background: rgba(124, 129, 135, 0.5);
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-theme='light'] .overlay {
    background: rgba(0, 0, 0, 0.5);
  }
</style>