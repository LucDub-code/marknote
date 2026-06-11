import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEditorStore = defineStore('editor', () => {

  const isPreviewVisible = ref(true)
  const content = ref('')

  const togglePreview = () => {
    isPreviewVisible.value = !isPreviewVisible.value
  }

  return { isPreviewVisible, togglePreview, content }
})