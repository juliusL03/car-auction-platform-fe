import axios from 'axios'

export const getHeaders = () => {
	return {
		'Content-type': 'application/json'
	}
}

export const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/services`

export const axiosInstance = axios.create({
	baseURL,
	withCredentials: true
})

export const axiosCustomURLInstance = (url: string) => {
	return axios.create({
		baseURL: url,
		withCredentials: true
	})
}
