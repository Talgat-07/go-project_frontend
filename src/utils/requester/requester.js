import axios from 'axios'
import { BASE_URL } from 'utils/constants/constants'

export const requester = axios.create({
  baseURL: BASE_URL + 'api/v1/',
})

requester.interceptors.request.use((config) => {
  const language = JSON.parse(localStorage.getItem('language'))?.code || 'ru'
  if ((config.headers['Accept-Language'] = language)) return config
})
