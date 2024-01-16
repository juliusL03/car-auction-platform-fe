import {SelectHTMLAttributes} from 'react'
import {FieldErrors, FieldValues} from 'react-hook-form'

import {FieldTypes, TBaseField, TWidth} from '../types'

export type TOptions = {
	label: string | boolean
	value: boolean | string | number
}

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> &
	TBaseField & {
		type: FieldTypes.SELECT
		label?: string
		options: TOptions[]
		size?: 'sm' | 'md' | 'lg'
		rounded?: boolean
		errors?: FieldErrors<FieldValues>
		isloading?: boolean
		invalid?: boolean
		layout?: 'horizontal' | 'vertical' | 'inline'
		labelWidth?: TWidth
		inputWidth?: TWidth
		width?: TWidth
		onChange?: (value: string) => void
	}
