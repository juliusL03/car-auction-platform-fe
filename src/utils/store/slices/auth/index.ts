import {HttpStatusCode} from 'axios'
import {StateCreator} from 'zustand'

import authApi from '@/apis/auth'
import {getAxiosError} from '@/utils/helpers/error-handler'

import {TAuthResponse, TAuthSlice} from './types'

const authSlice: StateCreator<TAuthSlice> = (set) => ({
	loading: false,
	authenticated: false,
	user: null,
	error: null,
	authenticate: async (payload) => {
		set((state) => ({...state, error: null, loading: true}))

		try {
			const response = (await authApi.authenticate(payload)) as TAuthResponse

			const {status_code: statusCode, data: user} = response

			if (statusCode === HttpStatusCode.Ok) {
				set((state) => ({...state, loading: false, authenticated: true, user}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	signup: async (payload) => {
		set((state) => ({...state, error: null, loading: true}))

		try {
			const {status_code: statusCode} = (await authApi.signup(payload)) as TAuthResponse

			if (statusCode === HttpStatusCode.Ok) {
				set((state) => ({...state, authenticated: true, loading: false}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	me: async () => {
		set((state) => ({...state, error: null, loading: true}))

		try {
			const {status_code: statusCode, data: user} = (await authApi.me()) as TAuthResponse
			if (statusCode === HttpStatusCode.Ok) {
				set((state) => ({...state, authenticated: true, user, loading: false}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	logout: async () => {
		set((state) => ({...state, error: null, loading: true}))

		try {
			const {status_code: statusCode} = (await authApi.logout()) as TAuthResponse

			if (statusCode === HttpStatusCode.Ok) {
				set((state) => ({...state, loading: false, authenticated: false, user: null}))
			}
		} catch (error) {
			set((state) => ({...state, loading: false, error: 'Unable to logout user'}))
		}
	}
})

export {type TAuthSlice} from './types'

export default authSlice
