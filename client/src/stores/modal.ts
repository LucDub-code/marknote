import { defineStore } from 'pinia'
import { ref } from 'vue'

type ModalType = 'delete' | 'auth' | null

export const useModalStore = defineStore('modal', () => {
  const active = ref<ModalType>(null)

  const openDelete = () => { active.value = 'delete' }
  const openAuth = () => { active.value = 'auth' }
  const close = () => { active.value = null }

  return { active, openDelete, openAuth, close }
})