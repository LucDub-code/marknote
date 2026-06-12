<script setup lang="ts">
  import { ref } from 'vue'
  import AuthForm from './AuthForm.vue'

  const mode = ref<'login' | 'signup'>('login')

  const toggleMode = () => {
    mode.value = mode.value === 'login' ? 'signup' : 'login'
  }
</script>

<template>
  <div class="modal">
    <div class="modal__forms">
      <AuthForm :mode="mode" @switch="toggleMode" />
    </div>
    <div class="modal__oauth">
      <div class="modal__divider text-preset-7-regular">Ou continuer avec</div>
      <button type="button" class="modal__oauth--button">
        <img src="../../assets/icons/google-icon.svg" alt="" width="16" />
        <span class="text-preset-6">Continuer avec Google</span>
      </button>
      <p class="modal__oauth--text text-preset-9">
        En continuant, vous acceptez les
        <span class="modal__oauth--text--link">conditions d'utilisation</span><br />et la
        <span class="modal__oauth--text--link">politique de confidentialité.</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .modal {
    background: var(--modal-bg);
    width: 100%;
    max-width: 400px;
    padding: 24px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--modal-text);

    &__divider {
      display: flex;
      align-items: center;
      gap: 16px;
      color: var(--slate-400);

      &::before,
      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--slate-500);
      }
    }

    &__oauth {
      display: flex;
      flex-direction: column;
      gap: 24px;

      &--button {
        cursor: pointer;
        background: var(--neutral-0);
        color: var(--neutral-950);
        border: solid 1px var(--slate-950);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding-block: 10px;

        &:hover {
          background: var(--neutral-100);
        }
      }

      &--text {
        text-align: center;
        color: var(--slate-400);
        margin-bottom: 8px;

        &--link {
          cursor: pointer;
          text-decoration: underline;

          &:hover {
            color: var(--slate-300);
          }
        }
      }
    }
  }
</style>