import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'easy_go/delivery/'

export const DeliveryApi = create((set) => ({
  deliveryData: [],
  isLoading: false,
  deliveryRequest: async () => {
    set({ isLoading: true });
    const response = await requester.get(endpoint)
    set({ deliveryData: response.data, isLoading: false })
  },
}))
