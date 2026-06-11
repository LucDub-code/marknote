import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  
  const isDeleteOpen = ref(false)

  const openDelete = () => { isDeleteOpen.value = true }
  const close = () => { isDeleteOpen.value = false }

  return { isDeleteOpen, openDelete, close }
})