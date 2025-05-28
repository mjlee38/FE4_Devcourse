import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTNiMTI4OWViM2VlNDUwMjllOGMwNTg1MWQ5NDNjNyIsIm5iZiI6MTc0NTQ2MzAzOC40Niwic3ViIjoiNjgwOWE2ZmVlOTJmOTQwY2E2OWNmMTQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.bXSSuj6mLux9HYKDaXrunrJm3MYAGEvBhaXBGO-sln0',
  },
})

export async function useFetch(url, method = 'GET', payload, headers = {}) {
  try {
    const options = {
      url,
      method,
      headers,
    }
    if (method === 'get' && payload) options.params = payload
    if (method !== 'get' && payload) options.data = payload

    const response = await axiosInstance(options)
    return response
  } catch (e) {
    console.log(e)
  }
}
