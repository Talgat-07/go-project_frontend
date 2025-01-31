import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'tours/main-tours/'

export const BannerApi = create((set) => ({
  bannerData: [],
  bannerRequest: async () => {
    const response = await requester.get(endpoint)
    set({ bannerData: response.data })
  },
}))
