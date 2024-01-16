import {ReactDatePickerProps} from 'react-datepicker'
import {InputHTMLAttributes, ReactNode} from 'react'
import {FieldErrors, FieldValues} from 'react-hook-form'

import {TBaseField, TWidth} from '@/forms/types'

export type DatePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	TBaseField &
	ReactDatePickerProps & {
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
		onChange?: (date: object | null) => void
		width?: TWidth
  iconPosition?: 'left' | 'right'
	}
