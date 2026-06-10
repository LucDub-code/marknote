<script setup lang="ts">
  import { useEditorStore } from '@/stores/editor'
  import OpenEyeIcon from '../ui/OpenEyeIcon.vue'
  import ClosedEyeIcon from '../ui/ClosedEyeIcon.vue'

  const editor = useEditorStore()
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
  </section>
</template>

<style scoped lang="scss">
  .preview {
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

    &.is-expanded {
      left: 0;
    }

    &__header {
      height: 40px;
      background: var(--editor-header);
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
      padding: 12px 16px;
    }
  }
</style>