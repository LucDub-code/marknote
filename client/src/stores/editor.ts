import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const STORAGE_KEY = 'markdown:content'

export const useEditorStore = defineStore('editor', () => {

  const content = ref(localStorage.getItem(STORAGE_KEY) ?? '')
  const isPreviewVisible = ref(true)

  watch(content, (markdownValue) => {
    localStorage.setItem(STORAGE_KEY, markdownValue)
  })

  const togglePreview = () => {
    isPreviewVisible.value = !isPreviewVisible.value
  }

  return { isPreviewVisible, togglePreview, content }
})