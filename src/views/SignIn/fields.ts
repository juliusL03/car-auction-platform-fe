import {FieldTypes, TField} from '@/forms/types'

export const loginFields: TField[] = [
	{
		type: FieldTypes.EMAIL,
		name: 'email',
		placeholder: '',
		label: 'Email',
		required: true,
		labelWidth: 20,
		layout: 'vertical',
		inputWidth: 'auto',
		value: 'test@test.com'
	},
	{
		type: FieldTypes.PASSWORD,
		name: 'password',
		placeholder: '',
		label: 'Password',
		required: true,
		layout: 'vertical',
		labelWidth: 20,
		inputWidth: 'auto',
		value: 'password123!'
	}
]
