<script setup lang="ts">
  import MarkdownEditor from './editor/MarkdownEditor.vue'
  import MarkdownPreview from './editor/MarkdownPreview.vue'
</script>

<template>
  <main class="main">
    <MarkdownEditor />
    <MarkdownPreview />
  </main>
</template>

<style scoped lang="scss">
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
</style>