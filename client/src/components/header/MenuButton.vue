<script setup lang="ts">
  import '@/assets/hamburgers.scss'
  import { ref } from 'vue'

  const isOpen = ref(false)

  const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="menu-button">
    <button 
      class="hamburger hamburger--squeeze" 
      type="button" 
      @click="toggleMenu" 
      :class="{ 'is-active': isOpen }"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
  .menu-button {
    background-color: var(--slate-700);
    width: 72px;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>