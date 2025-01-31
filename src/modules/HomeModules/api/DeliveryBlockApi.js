import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'easy_go/delivery_easy_go/'

export const DeliveryBlockApi = create((set) => ({
  deliveryData: [],
  deliveryRequest: async () => {
    const response = await requester.get(endpoint)
    set({ deliveryData: response.data })
  },
}))
