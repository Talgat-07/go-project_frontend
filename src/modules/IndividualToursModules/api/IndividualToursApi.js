import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'tours/ind-tours/'

export const individualToursApi = create((set) => ({
  individualToursData: [],
  individualToursRequest: async () => {
    const response = await requester.get(endpoint)
    set({ individualToursData: response.data })
  },
}))
