<script setup lang="ts"></script>

<template>
  <section class="editor">
    <div class="editor__header">
      <h2 class="editor__title text-preset-8">Markdown</h2>
    </div>
    <div class="editor__content">
      
    </div>
  </section>
</template>

<style scoped lang="scss">
  .editor {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    &__header {
      height: 40px;
      background: var(--editor-header);
      padding: 12px 16px;
    }

    &__title {
      text-transform: uppercase;
    }

    &__content {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 12px 16px;
    }
  }
</style>