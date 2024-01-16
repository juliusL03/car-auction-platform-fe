import {AxiosResponse} from 'axios'

import {TDefaultResponseData, TOmittedFields, TSliceError} from '@/models/common'
import {TUserData} from '@/models/user'

export type TAuthPayload = {
	email: string
	password: string
}

export type TAuthResponseData = {
	authenticated: boolean
	user: TUserData
}

export type TSignupPayload = Omit<TUserData, TOmittedFields>

export type TAuthResponse = AxiosResponse<TUserData> & {
	status_code: number
	success: boolean
}

export type TSignupResponse = AxiosResponse<TDefaultResponseData<TUserData>>
export type TLogoutResponse = AxiosResponse<{message: string}>

export type TAuthSlice = {
	loading: boolean
	authenticated: boolean
	user: TUserData | null
	error: TSliceError
	authenticate: (payload: TAuthPayload) => void
	signup: (payload: TSignupPayload) => void
	me: () => void
	logout: () => void
}
