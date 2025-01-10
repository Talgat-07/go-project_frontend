import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'visa_go/'

export const useVisaSupport = create((set) => ({
  visaData: [],
  visaRequest: async () => {
    const response = await requester.get(endpoint)
    set({ visaData: response.data })
  },
}))
