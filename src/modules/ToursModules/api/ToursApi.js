import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const endpoints = {
  countries: 'tours/countries/',
  tourTypes: 'tours/tour-types/',
  allTours: 'tours/all-tours/',
}

export const useAllTours = create((set) => ({
  countriesData: [],
  tourTypesData: [],
  toursData: [],

  fetchCountries: async () => {
    const response = await requester.get(endpoints.countries)
    set({ countriesData: response.data })
  },
  fetchTourTypes: async () => {
    const response = await requester.get(endpoints.tourTypes)
    set({ tourTypesData: response.data })
  },
  fetchAllTours: async () => {
    const response = await requester.get(endpoints.allTours)
    set({ toursData: response.data })
  },
}))
