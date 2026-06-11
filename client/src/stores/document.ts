import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { formatFileName } from '@/utils/formatFileName'

const STORAGE_KEY = 'marknote:content'

export const useDocumentStore = defineStore('document', () => {

  const name = ref('sans-titre.md')
  const content = ref(localStorage.getItem(STORAGE_KEY) ?? '')

  watch(content, (markdownValue) => {
    localStorage.setItem(STORAGE_KEY, markdownValue)
  })

  const formatName = () => {
    name.value = formatFileName(name.value)
  }

  return { name, content, formatName }
})