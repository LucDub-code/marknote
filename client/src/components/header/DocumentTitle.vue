<script setup lang="ts">
  import { ref } from 'vue'
  import { formatFileName } from '@/utils/formatFileName'

  const name = ref('welcome.md')

  const handleBlur = () => {
    name.value = formatFileName(name.value)
  }
</script>

<template>
  <div class="document">
    <img src="../../assets/icons/file-icon.svg" alt="" class="document__icon" />
    <div class="document__text">
      <span class="document__label text-preset-9">Document Name</span>
      <input
        v-model="name"
        class="document__name text-preset-6"
        type="text"
        @blur="handleBlur"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .document {
    padding-left: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
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
      color: var(--slate-400)
    }
    &__name {
      color: var(--neutral-0);
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 4px 0;
      border-bottom: 2px solid transparent;

      &:focus {
        border-bottom-color: var(--neutral-0);
        cursor: text;
      }
    }
  }
</style>