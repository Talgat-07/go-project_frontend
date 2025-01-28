import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'visa_go/visa-go/'

export const VisaSupportApi = create((set) => ({
  visaData: [],
  visaRequest: async () => {
    const response = await requester.get(endpoint)
    set({ visaData: response.data })
  },
}))
