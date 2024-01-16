import {AxiosHeaders, HttpStatusCode} from 'axios'

// NOTE: This should be remove and change its implementation see below for reference
type TCommonResponse = {
	headers: AxiosHeaders
	status: HttpStatusCode
}

export type TDefaultListResponse<T> = {
 data?:T[] | T
 status_code?: HttpStatusCode
 message?: string
 error?: string
} & TCommonResponse

export type TDefaultResponse<T> = {
	data: T
} & TCommonResponse
// END NOTE

export type TDefaultListResponseData<T> = {
	data: T[]
	message?: string
	total_count?: number
}

export type TDefaultResponseData<T> = {
	data: T
	message?: string
}

export type TOmittedFields = '_id' | 'deleted_at' | 'created_at' | 'updated_at'
export type TUpdateOmittedFields = '_id' | 'deleted_at' | 'created_at'

export type TOmittedEditFields = '_id' | 'deleted_at' | 'created_at' | 'updated_at' | 'transaction_number'

export type TValidationError = {
	error: string | object
}

export type TSliceError = string | object | null
