import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const endpoint = 'core/start-block/'

export const BannerApi = create((set) => ({
  bannerData: [],
  bannerRequest: async () => {
    const response = await requester.get(endpoint)
    set({ bannerData: response.data })
  },
}))
