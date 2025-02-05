import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'core/send-to-amocrm/'

export const postFormData = create(set => ({
  data: null,
  fetchRequest: async data => {
    try {
      const response = await requester.post(endpoint, data)
      set({ data: response.data })
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
    }
  },
}))
