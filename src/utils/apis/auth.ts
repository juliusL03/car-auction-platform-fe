import {TUserData} from '@/models/user'
import {TAuthPayload, TAuthResponse, TSignupPayload, TSignupResponse} from '@/store/slices/auth/types'

import endpoints from './endpoints'

import {axiosCustomURLInstance, getHeaders} from '.'

const headers = getHeaders()

const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/`

const authenticate = async (payload: TAuthPayload): Promise<TAuthResponse | unknown> => {
	return (await axiosCustomURLInstance(apiUrl).post(endpoints.USER_AUTHENTICATE, payload, {headers})).data
}

const signup = async (payload: TSignupPayload): Promise<TSignupResponse | unknown> => {
	return (await axiosCustomURLInstance(apiUrl).post(endpoints.USER_SIGNUP, payload, {headers})).data
}

const me = async (): Promise<TUserData | unknown> => {
	return (await axiosCustomURLInstance(apiUrl).get(endpoints.USER_ME, {headers})).data
}

const logout = async (): Promise<TAuthResponse | unknown> => {
	return (await axiosCustomURLInstance(apiUrl).post(endpoints.USER_LOGOUT, {}, {headers})).data
}

const authApi = {
	authenticate,
	signup,
	me,
	logout
}

export default authApi
