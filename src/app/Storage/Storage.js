import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const contacts_endpoint = 'core/contacts/'
const social_media_endpoint = 'core/social-media/'

export const ContactsStorage = create((set) => ({
  contactsData: [],
  contactsRequest: async () => {
    const contactResponse = await requester.get(contacts_endpoint)
    set({ contactsData: contactResponse.data })
  },

  smData: [],
  smRequest: async () => {
    const smResponse = await requester.get(social_media_endpoint)
    set({ smData: smResponse.data})
  },
}))
