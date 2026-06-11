<script setup lang="ts">
  import { useDocumentStore } from '@/stores/document'
  import BaseButton from '../../components/ui/BaseButton.vue'

  const document = useDocumentStore()
</script>

<template>
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="delete-document">
    <h2 id="delete-document" class="modal__title text-preset-4">Supprimer le document</h2>
    <p class="modal__text text-preset-7-regular">Êtes-vous sûr de vouloir supprimer le document {{ document.name }} et son contenu ?<br/>Cette action est irréversible.</p>
    <BaseButton class="modal__button">Confirmer la suppression</BaseButton>
  </div>
</template>

<style scoped lang="scss">
  .modal {
    background: var(--modal-bg);
    max-width: 340px;
    padding: 20px 24px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--modal-text);

    &__title {
      color: var(--modal-title);
    }

    &__text {
      color: var(--modal-text);
      margin-bottom: 4px;
    }

    &__button {
      width: 100%;
      padding-block: 12px;
    }
  }
</style>