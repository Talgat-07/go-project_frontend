import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'about_us/'

export const AboutUsAPI = create((set) => ({
  aboutUsData: [],
  fetchRequest: async () => {
    const response = await requester.get(endpoint)
    set({ aboutUsData: response.data })
  },
}))
