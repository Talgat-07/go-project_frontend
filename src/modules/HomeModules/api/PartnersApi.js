import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'core/partners/'

export const PartnersApi = create((set) => ({
  partnersData: [],
  partnersRequest: async () => {
    const response = await requester.get(endpoint)
    set({ partnersData: response.data })
  },
}))
