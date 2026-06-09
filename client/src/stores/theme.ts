import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'dark' | 'light'>('dark')

  const set = (value: 'dark' | 'light') => {
    theme.value = value
  }

  watch(theme, (value) => {
    document.documentElement.dataset.theme = value
  }, { immediate: true })

  return { theme, set }
})