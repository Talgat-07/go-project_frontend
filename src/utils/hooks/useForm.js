import { create } from 'zustand';

export const useForm = create((set) => ({
  form: false,
  formShow: () => set({ form: true }),
  formHide: () => set({ form: false }),
}));
