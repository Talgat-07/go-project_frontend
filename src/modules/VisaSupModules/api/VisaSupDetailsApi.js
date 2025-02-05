import { requester } from '@/utils/requester/requester';
import { create } from 'zustand';

export const VisaSupDetailsApi = create((set) => ({
  visaData: null,
  isLoading: false,
  visaRequest: async (id) => {
    set({ isLoading: true });
    const response = await requester.get(`visa_go/visa-page/${id}`);
    set({ visaData: response.data, isLoading: false });
  },
}));
