import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

export const useCountries = create((set) => ({
  countriesData: [],
  loading: false,
  error: null,

  fetchCountries: async () => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get('tours/countries/')
      set({ countriesData: response.data, loading: false })
    } catch (err) {
      set({ error: error.message || 'Fetch err', loading: false })
    }
  },
}))
