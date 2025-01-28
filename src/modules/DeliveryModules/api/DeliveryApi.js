import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'easy_go/delivery/'

export const DeliveryApi = create((set) => ({
  deliveryData: [],
  deliveryRequest: async () => {
    const response = await requester.get(endpoint)
    set({ deliveryData: response.data })
  },
}))
