import {isAxiosError} from 'axios'

import {UNKNOWN_ERROR} from '@/utils/constant'
import {TValidationError} from '@/utils/models/common'

export const getAxiosError = (error: unknown) => {
	if (isAxiosError<TValidationError>(error)) {
		const errorResponse = error?.response?.data?.error || error?.response?.data || UNKNOWN_ERROR
		if (errorResponse) {
			return errorResponse
		}
	} else {
		return UNKNOWN_ERROR
	}
}
