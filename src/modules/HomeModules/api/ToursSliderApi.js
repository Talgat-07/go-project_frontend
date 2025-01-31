import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'tours/main-tours/'

export const ToursSliderApi = create((set) => ({
  toursData: [],
  toursRequest: async () => {
    const response = await requester.get(endpoint)
    set({ toursData: response.data })
  },
}))
