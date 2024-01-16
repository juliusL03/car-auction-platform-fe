import {InputHTMLAttributes} from 'react'
import {FieldErrors, FieldValues} from 'react-hook-form'

import {FieldTypes, TBaseField, TWidth} from '@/forms/types'

export type CheckboxProps = {
	type: FieldTypes.CHECKBOX
	label?: string
	size?: 'sm'
	rounded?: boolean
	errors?: FieldErrors<FieldValues>
	isloading?: boolean
	invalid?: boolean
	checked?: boolean
	layout?: 'horizontal' | 'vertical' | 'inline'
	labelWidth?: TWidth
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	TBaseField
