import { create } from 'zustand';

export const useForm = create((set) => ({
  form: true,
  formShow: () => set({ form: true }),
  formHide: () => set({ form: false }),
}));
