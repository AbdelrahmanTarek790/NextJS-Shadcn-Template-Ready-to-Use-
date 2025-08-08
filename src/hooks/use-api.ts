import useSWR from 'swr'
import api from '@/lib/api'

// Generic fetcher function for SWR
const fetcher = (url: string) => api.get(url).then(res => res.data)

// Custom hook for GET requests
export function useApi<T>(url: string | null, options?: Record<string, unknown>) {
  const { data, error, mutate } = useSWR<T>(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    ...options,
  })

  return {
    data,
    isLoading: !error && !data,
    error,
    mutate,
  }
}

// Custom hook for POST requests
export function useApiPost() {
  const post = async (url: string, data: unknown) => {
    try {
      const response = await api.post(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return { post }
}

// Custom hook for PUT requests
export function useApiPut() {
  const put = async (url: string, data: unknown) => {
    try {
      const response = await api.put(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return { put }
}

// Custom hook for DELETE requests
export function useApiDelete() {
  const del = async (url: string) => {
    try {
      const response = await api.delete(url)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return { delete: del }
}