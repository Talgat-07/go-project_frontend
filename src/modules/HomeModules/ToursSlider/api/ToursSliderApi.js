import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

// its API incorrect work & haven't id
// const endpoint = 'tours/main-tours/'
const endpoint = 'tours/all-tours/'

export const ToursSliderApi = create((set) => ({
  toursData: [],
  toursRequest: async () => {
    const response = await requester.get(endpoint)
    set({ toursData: response.data })
  },
}))
