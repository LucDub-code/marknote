<script setup lang="ts"></script>

<template>
  <div class="overlay" />
</template>

<style scoped lang="scss">
  .overlay {
    background: rgba(124, 129, 135, 0.5);
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  [data-theme='light'] .overlay {
    background: rgba(0, 0, 0, 0.5);
  }
</style>