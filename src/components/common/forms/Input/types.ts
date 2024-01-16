import {InputHTMLAttributes, ReactNode} from 'react'
import {FieldErrors, FieldValues} from 'react-hook-form'

import {FieldTypes, TBaseField, TWidth} from '@/forms/types'

export type InputProps = {
	type:
		| FieldTypes.TEXT
		| FieldTypes.PASSWORD
		| FieldTypes.NUMBER
		| FieldTypes.SEARCH
		| FieldTypes.EMAIL
		| FieldTypes.DATE
	label?: string | ReactNode
	size?: 'sm' | 'md' | 'lg'
	rounded?: boolean
	errors?: FieldErrors<FieldValues>
	isloading?: boolean
	invalid?: boolean
	layout?: 'horizontal' | 'vertical' | 'inline'
	allowEmpty?: boolean
	labelWidth?: TWidth
	inputWidth?: TWidth
	prefixIcon?: string | ReactNode
	suffixIcon?: string | ReactNode
 value?: string
	width?: TWidth
    onBlur?: () => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> &
	TBaseField
