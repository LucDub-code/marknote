<script setup lang="ts">
  import { useEditorStore } from '@/stores/editor'
  import { useDocumentStore } from '@/stores/document'
  import OpenEyeIcon from '../ui/OpenEyeIcon.vue'
  import ClosedEyeIcon from '../ui/ClosedEyeIcon.vue'
  import { computed } from 'vue'
  import { marked } from 'marked'
  import '@/assets/preview.scss'

  const editor = useEditorStore()
  const document = useDocumentStore()

  const renderedHtml = computed(() => marked.parse(document.content))
</script>

<template>
  <section class="preview" :class="{ 'is-expanded': !editor.isPreviewVisible }">
    <div class="preview__header">
      <h2 class="preview__title text-preset-8">Aperçu</h2>
      <button type="button" class="preview__button" @click="editor.togglePreview">
        <OpenEyeIcon v-if="editor.isPreviewVisible" />
        <ClosedEyeIcon v-else />
      </button>
    </div>
    <div class="preview__content">
      <div class="preview__inner markdown" v-html="renderedHtml"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .preview {
    background: var(--bg);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border-left: 1px solid var(--slate-500);
    transition: left 0.2s ease;

    @media (max-width: 768px) {
      left: 0;

      &:not(.is-expanded) {
      display: none;
      }
    }

    &.is-expanded {
      left: 0;
    }

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

    &__button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--neutral-0);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: var(--orange-600);
      }
    }

    &__content {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 24px 20px;
    }

    &__inner {
      max-width: 720px;
      margin: 0 auto;
    }
  }
</style>