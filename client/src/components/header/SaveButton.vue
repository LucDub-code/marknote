<script setup lang="ts">
  import BaseButton from '../../components/ui/BaseButton.vue'
</script>

<template>
  <BaseButton class="save-button text-preset-6">
    <img src="../../assets/icons/save-icon.svg" alt="" />
    <span class="save-button__text">Enregistrer</span>
  </BaseButton>
</template>

<style scoped lang="scss">
  .save-button {
    padding: 10px 16px;

    @media (max-width: 425px) {
      padding: 10px;
    }

    &__text {
      margin-left: 8px;

      @media (max-width: 425px) {
        display: none;
      }
    }
  }
</style>