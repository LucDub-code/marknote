<script setup lang="ts">
  import { useDocumentStore } from '@/stores/document'

  const document = useDocumentStore()
</script>

<template>
  <div class="document">
    <img src="../../assets/icons/file-icon.svg" alt="" class="document__icon" />
    <div class="document__text">
      <label for="document-name" class="document__label text-preset-9">Nom du document</label>
      <input id="document-name" v-model="document.name" class="document__name text-preset-6" type="text"
        @blur="document.formatName" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .document {
    padding-left: 24px;
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
      padding-left: 0px;
    }

    &__icon {
      width: 16px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: flex-start;
    }

    &__label {
      color: var(--slate-400);

      @media (max-width: 768px) {
        display: none;
      }
    }

    &__name {
      width: 100%;
      min-width: 0;
      color: var(--neutral-0);
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 2px 0;
      border-bottom: 2px solid transparent;

      &:focus {
        border-bottom-color: var(--neutral-0);
        cursor: text;
      }
    }
  }
</style>