import {FieldErrors, FieldValues} from 'react-hook-form'
import {TextareaHTMLAttributes} from 'react'

import {TBaseField, TWidth} from '@/forms/types'

export type TextAreaProps = {
	label?: string
	rows?: number
	cols?: number
	size?: 'sm' | 'md' | 'lg'
	rounded?: boolean
	errors?: FieldErrors<FieldValues>
	isloading?: boolean
	allowEmpty?: boolean
	invalid?: boolean
	layout?: 'horizontal' | 'vertical' | 'inline'
	labelWidth?: TWidth
	inputWidth?: TWidth
	width?: TWidth
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> &
	TBaseField & {onChange?: (value: string) => void}
