import { requester } from '@/utils/requester/requester';
import { create } from 'zustand';

const endpoint = 'tours/ind-tours/';

export const individualToursApi = create((set) => ({
  individualToursData: [],
  isLoading: false,
  individualToursRequest: async () => {
    set({ isLoading: true });
    const response = await requester.get(endpoint);
    set({ individualToursData: response.data, isLoading: false });
  },
}));
