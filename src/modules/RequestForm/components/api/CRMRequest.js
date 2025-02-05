import { requester } from '@/utils/requester/requester';
import { create } from 'zustand';

const endpoint = 'core/send-to-amocrm/';

export const CRMRequest = create((set) => ({
  data: null,
  fetchRequest: async (data) => {
    const fetch = await requester.post(endpoint, { data });
    set({ data: fetch.data });
  },
}));
