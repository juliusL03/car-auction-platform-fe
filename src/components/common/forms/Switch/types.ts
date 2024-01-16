import {InputHTMLAttributes} from 'react'
import {FieldErrors, FieldValues} from 'react-hook-form'

import {FieldTypes, TBaseField, TWidth} from '@/forms/types'

export type SwitchProps = {
	type: FieldTypes.SWITCH
	label?: string
	variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
	size?: 'sm' | 'md' | 'lg'
	errors?: FieldErrors<FieldValues>
	isloading?: boolean
	invalid?: boolean
	layout?: 'horizontal' | 'vertical' | 'inline'
	labelWidth?: TWidth
	inputWidth?: TWidth
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	TBaseField
