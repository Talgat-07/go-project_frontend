import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'core/reviews/'

export const ReviewsApi = create((set) => ({
  reviewsData: [],
  reviewsRequest: async () => {
    const response = await requester.get(endpoint)
    set({ reviewsData: response.data })
  },
}))
