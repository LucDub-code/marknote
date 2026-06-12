<script setup lang="ts">
  import { ref } from 'vue'
  import { useModalStore } from '@/stores/modal'

  const isConnected = ref(false)

  const modal = useModalStore()
</script>

<template>
  <button
    type="button"
    class="auth-button"
    :class="{ 'auth-button--connected': isConnected }"
    :aria-label="isConnected ? 'Mon compte' : 'Se connecter'"
    @click="modal.openAuth"
  >
    <img v-if="isConnected" class="auth-button__icon" src="../../assets/icons/user-icon.svg" alt="" />
    <img v-else class="auth-button__icon" src="../../assets/icons/login-icon.svg" alt="" />
  </button>
</template>

<style scoped lang="scss">
  .auth-button {
    cursor: pointer;
    background: var(--slate-500);
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 8px;

    &:hover {
      background: var(--slate-400);
    }

    &__icon {
      width: 24px;
    }

    &--connected {
      background: var(--green-600);

      &:hover {
        background: var(--green-400);
      }
    }
  }
</style>