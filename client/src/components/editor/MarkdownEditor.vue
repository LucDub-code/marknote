<script setup lang="ts">
  import { useDocumentStore } from '@/stores/document'
  import { useEditorStore } from '@/stores/editor'
  import OpenEyeIcon from '../ui/OpenEyeIcon.vue'

  const document = useDocumentStore()
  const editor = useEditorStore()
</script>

<template>
  <section class="editor">
    <div class="editor__header">
      <h2 class="editor__title text-preset-8">Markdown</h2>
      <button type="button" class="editor__toggle" @click="editor.togglePreview">
        <OpenEyeIcon />
      </button>
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
      display: flex;
      align-items: center;
      justify-content: space-between;
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

    &__toggle {
      background: none;
      border: none;
      display: none;
      cursor: pointer;
      color: var(--neutral-0);

      @media (max-width: 425px) {
        display: flex;
      }

      &:hover {
        color: var(--orange-600);
      }
    }
  }
</style>