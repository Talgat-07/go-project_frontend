import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'core/send-to-amocrm/'

export const usePostFormData = create(set => ({
  data: null,
  isSuccess: false,
  isLoading: false,
  error: null,
  fetchRequest: async data => {
    set({ isLoading: true, error: null })
    try {
      const response = await requester.post(endpoint, data)
      set({ data: response.data, isSuccess: true, isLoading: false, error: null })
    } catch (error) {
      set({ error: error.message, isSuccess: false, isLoading: false })
      console.error(error)
    }
  },
  resetSuccess: () => set({ isSuccess: false }),
}))
