<script setup lang="ts">
  import { computed } from 'vue'
  import BaseButton from '../ui/BaseButton.vue'

  const props = defineProps<{ mode: 'login' | 'signup' }>()

  const emit = defineEmits<{ switch: [] }>()

  const content = computed(() =>
    props.mode === 'login'
      ? {
        title: 'Connexion',
        submit: 'Se connecter',
        switchText: 'Pas de compte ?',
        switchLink: 'Créer un compte',
      }
      : {
        title: 'Créer un compte',
        submit: 'Créer un compte',
        switchText: 'Déjà un compte ?',
        switchLink: 'Se connecter',
      }
  )
</script>

<template>
  <form class="form">
    <h2 class="form__title text-preset-2">{{ content.title }}</h2>
    <div class="form__item">
      <label for="email">Email</label>
      <input id="email" type="email" class="input text-preset-7-regular" />
    </div>
    <div class="form__item">
      <label for="password">Mot de passe</label>
      <input id="password" type="password" class="input text-preset-7-regular" />
    </div>
    <div class="form__item" v-if="mode === 'signup'">
      <label for="confirm-password">Confirmer le mot de passe</label>
      <input id="confirm-password" type="password" class="input text-preset-7-regular" />
    </div>
    <BaseButton type="submit" class="form__submit text-preset-6">{{ content.submit }}</BaseButton>
    <p class="form__switch text-preset-7-regular">
      {{ content.switchText }}
      <button type="button" class="form__switch--link" @click="emit('switch')">{{ content.switchLink }}</button>
    </p>
  </form>
</template>

<style scoped lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--modal-text);

    &__title {
      color: var(--modal-title);
      text-align: center;
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__submit {
      padding-block: 10px;
      margin-top: 16px;
    }

    &__switch {
      text-align: center;

      &--link {
        background: none;
        border: none;
        font: inherit;
        color: var(--orange-600);
        cursor: pointer;

        &:hover {
          color: var(--orange-400);
          text-decoration: underline;
        }
      }
    }
  }
</style>