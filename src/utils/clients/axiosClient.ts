import Axios, { InternalAxiosRequestConfig } from 'axios'

/* eslint-disable no-param-reassign */
const useAuthRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json'
    config.headers['X-API-KEY'] = process.env.NEXT_PUBLIC_API_KEY
  }
  return config
}

const params = {
  baseURL: process.env.NEXT_PUBLIC_API_URL
}

export const axios = Axios.create(params)

axios.interceptors.request.use(useAuthRequestInterceptor)
