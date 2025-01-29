import { create } from 'zustand';
import { requester } from '@/utils/requester/requester';

export const TourDetailApi = create((set) => ({
  tourDetailData: null,
  isLoading: false,
  tourDetailRequest: async (id) => {
    set({ isLoading: true });
      const response = await requester.get(`tours/tours/${id}/`);
      set({ tourDetailData: response.data, isLoading: false });
  },
}));
