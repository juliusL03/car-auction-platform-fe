import {FieldTypes, TField} from '@/forms/types'

export const loginFields: TField[] = [
	{
		type: FieldTypes.TEXT,
		name: 'full_name',
		placeholder: '',
		label: 'Full Name',
		required: true,
		labelWidth: 10,
		layout: 'vertical',
		inputWidth: 125,
		width: 'full'

	},
	{
		type: FieldTypes.TEXT,
		name: 'phone_number',
		placeholder: '',
		label: 'Phone Number',
		required: true,
		labelWidth: 10,
		layout: 'vertical',
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.EMAIL,
		name: 'email',
		placeholder: '',
		label: 'Email',
		required: true,
		labelWidth: 10,
		layout: 'vertical',
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.PASSWORD,
		name: 'password',
		placeholder: '',
		label: 'Password',
		required: true,
		layout: 'vertical',
		labelWidth: 10,
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.PASSWORD,
		name: 'confirm_password',
		placeholder: '',
		label: 'Confirm Password',
		required: true,
		layout: 'vertical',
		labelWidth: 10,
		inputWidth: 'auto'
	}
]
