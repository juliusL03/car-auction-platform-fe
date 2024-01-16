import {ReactNode} from 'react'
import {FieldValues, SubmitHandler, UseFormReturn} from 'react-hook-form'

import {CheckboxProps} from './Checkbox/types'
import {DatePickerProps} from './Datepicker/types'
import {InputProps} from './Input/types'
import {RadioProps} from './Radio/types'
import {SelectProps} from './Select/types'
import {SwitchProps} from './Switch/types'
import {TextAreaProps} from './TextArea/types'

export enum FieldTypes {
	TEXT = 'text',
 EMAIL= 'email',
	TEXTAREA = 'textarea',
	PASSWORD = 'password',
	NUMBER = 'number',
	SELECT = 'select',
	RADIO = 'radio',
	SWITCH = 'switch',
	MULTIPLE = 'multiple',
	SEARCH = 'search',
	CHECKBOX = 'checkbox',
	JSON = 'json',
	ARRAY = 'array',
	DATE = 'date'
}

export type TWidth = number | 'auto' | 'full'

export type TLabel = string | ReactNode

export type TBaseField = {
	type: FieldTypes
	name: string
	label: TLabel
	required?: boolean
	layout?: 'horizontal' | 'vertical' | 'inline'
	labelWidth?: TWidth
	inputWidth?: TWidth
}

type JsonFieldProps = {
	type: FieldTypes.JSON
	subFields: TField[]
}

type ArrayFieldProps = {
	type: FieldTypes.ARRAY
	item: TField
}

export type InputAttributes = TBaseField & InputProps
export type TextAreaAttributes = TBaseField & TextAreaProps
export type SelectAttributes = TBaseField & SelectProps
export type RadioAttributes = TBaseField & RadioProps
export type CheckboxAttributes = TBaseField & CheckboxProps
export type SwitchAttributes = TBaseField & SwitchProps
export type JsonFieldAttributes = TBaseField & JsonFieldProps
export type ArrayFieldAttributes = TBaseField & ArrayFieldProps
export type DatePickerAttributes = TBaseField & DatePickerProps

export type TField =
	| InputAttributes
	| SelectAttributes
	| RadioAttributes
	| SwitchAttributes
	| JsonFieldAttributes
	| ArrayFieldAttributes
	| TextAreaAttributes
	| CheckboxAttributes
	| DatePickerAttributes

export type FormProps = {
	methods: UseFormReturn<FieldValues>
	onSubmit?: SubmitHandler<FieldValues>
	fields: TField[]
	layout?: 'horizontal' | 'vertical' | 'inline'
	topChild?: ReactNode
	bottomChild?: ReactNode
	partial?: boolean
    onBlur?: () => void
}

export type FieldsProps = {
	fields: TField[]
	layout?: 'horizontal' | 'vertical' | 'inline'
    onBlur?: () => void
}
