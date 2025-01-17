import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint_1 = 'tours/countries/'
const endpoint_2 = 'tours/tour-types/'

export const CountryAndCitiesFIlter = create((set) => ({
  data_1: [],
  request_1: async () => {
    const response_1 = await requester.get(endpoint_1)
    set({ data_1: response_1.data })
  },
  data_2: [],
  request_2: async () => {
    const response_2 = await requester.get(endpoint_2)
    set({ data_2: response_2.data })
  },
}))
