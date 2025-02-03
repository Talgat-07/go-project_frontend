import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

export const useTourTypes = create((set) => ({
  tourTypesData: [],
  loading: false,
  error: null,

  fetchTourTypes: async () => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get('tours/tour-types/')
      set({ tourTypesData: response.data, loading: false })
    } catch (err) {
      set({ error: error.message || 'Fetch err', loading: false })
    }
  },
}))
