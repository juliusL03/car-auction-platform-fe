import {InputHTMLAttributes} from 'react'
import {FieldErrors, FieldValues} from 'react-hook-form'

import {FieldTypes, TBaseField, TWidth} from '../types'

export type TOptions = {
	label: string
	value: string | number
}

export type RadioProps = {
	type: FieldTypes.RADIO
	label?: string
	options: TOptions[]
	variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
	status?: 'success' | 'error'
	errors?: FieldErrors<FieldValues>
	isloading?: boolean
	invalid?: boolean
	layout?: 'horizontal' | 'vertical' | 'inline'
	labelWidth?: TWidth
	inputWidth?: TWidth
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	TBaseField
