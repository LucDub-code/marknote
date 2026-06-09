<script setup lang="ts">
  import BaseButton from '../../components/ui/BaseButton.vue'
</script>

<template>
  <BaseButton class="save-button text-preset-6">
    <img src="../../assets/icons/save-icon.svg" alt="" />
    <span>Enregistrer</span>
  </BaseButton>
</template>

<style scoped lang="scss">
  .save-button {
    padding: 10px 16px;
  }
</style>