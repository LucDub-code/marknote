<script setup lang="ts">
  import { useDocumentStore } from '@/stores/document'

  const document = useDocumentStore()
</script>

<template>
  <section class="editor">
    <div class="editor__header">
      <h2 class="editor__title text-preset-8">Markdown</h2>
    </div>
    <textarea v-model="document.content" class="editor__content text-preset-8-mono" spellcheck="false"></textarea>
  </section>
</template>

<style scoped lang="scss">
  .editor {
    background: var(--bg);
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    &__header {
      height: 40px;
      background: var(--editor-header);
      color: var(--editor-header-text);
      padding: 12px 16px;
    }

    &__title {
      text-transform: uppercase;
    }

    &__content {
      width: 100%;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 12px 16px;
      resize: none;
      border: none;
      outline: none;
      background: none;
      font: inherit;
      color: var(--text-markdown);
    }
  }
</style>