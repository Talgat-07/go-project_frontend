import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'delivery/'

export const useEG_Delicery = create((set) => ({
  deliveryData: [],
  deliveryRequest: async () => {
    const response = await requester.get(endpoint)
    set({ deliveryData: response.data })
  },
}))
