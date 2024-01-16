/* eslint-disable sonarjs/no-duplicate-string */
import {joiResolver} from '@hookform/resolvers/joi'
import {NextPage} from 'next'
import {useCallback} from 'react'
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'

import Button from '@/components/common/elements/Button'
import Form from '@/components/common/forms/Form'
import {ArrayFieldAttributes, FieldTypes, JsonFieldAttributes, SwitchAttributes, TField} from '@/components/common/forms/types'
import generateJoiSchema from '@/utils/helpers/joi'

const fields: TField[] = [
	{
		type: FieldTypes.TEXT,
		name: 'email',
		placeholder: 'Email',
		label: 'Email',
		required: true,
		labelWidth: 10,
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.PASSWORD,
		name: 'password',
		placeholder: 'Password',
		label: 'Password',
		required: true,
		labelWidth: 10,
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.PASSWORD,
		name: 'confirm_password',
		placeholder: 'Confirm Password',
		label: 'Confirm Password',
		required: true,
		labelWidth: 10,
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.NUMBER,
		name: 'age',
		placeholder: 'age',
		label: 'Age',
		required: true,
		labelWidth: 10,
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.SELECT,
		name: 'country',
		placeholder: 'Select Country',
		label: 'Country',
		labelWidth: 10,
		required: true,
		inputWidth: 'auto',
		options: [
			{
				label: 'Singapore',
				value: 'singapore'
			},
			{
				label: 'Philippines',
				value: 'philippines'
			}
		]
	},
	{
		type: FieldTypes.ARRAY,
		name: 'avatar',
		placeholder: 'Set avatar',
		label: 'Avatars',
		labelWidth: 10,
		inputWidth: 'auto',
		required: true,
		item: {
			type: FieldTypes.SWITCH,
			placeholder: 'Avatar',
			label: 'avatar',
			required: true,
			labelWidth: 10,
			inputWidth: 'auto'
		} as SwitchAttributes
	} as ArrayFieldAttributes,
	{
		type: FieldTypes.ARRAY,
		name: 'names',
		placeholder: 'Set names',
		label: 'Names',
		labelWidth: 10,
		inputWidth: 'auto',
		required: true,
		item: {
			type: FieldTypes.JSON,
			name: 'name',
			labelWidth: 10,
			subFields: [
				{
					type: FieldTypes.TEXT,
					name: 'first_namea',
					placeholder: 'First name',
					label: 'First name',
					required: true
				},
				{
					type: FieldTypes.TEXT,
					name: 'last_namea',
					placeholder: 'Last name',
					label: 'Last name',
					required: true
				}
			]
		} as JsonFieldAttributes
	} as ArrayFieldAttributes,
	{
		type: FieldTypes.RADIO,
		name: 'gender',
		label: 'Gender',
		labelWidth: 10,
		inputWidth: 'auto',
		variant: 'success',
		required: true,
		options: [
			{
				label: 'Male',
				value: 'male'
			},
			{
				label: 'Female',
				value: 'female'
			}
		]
	},
	{
		type: FieldTypes.SWITCH,
		name: 'remember',
		label: 'Remember me',
		labelWidth: 10,
		inputWidth: 'auto',
		required: true,
		variant: 'success'
	},
	{
		type: FieldTypes.JSON,
		name: 'name',
		labelWidth: 10,
		subFields: [
			{
				type: FieldTypes.TEXT,
				name: 'first_name',
				placeholder: 'First name',
				label: 'First name',
				required: true
			},
			{
				type: FieldTypes.TEXT,
				name: 'last_name',
				placeholder: 'Last name',
				label: 'Last name',
				required: true
			}
		]
	} as JsonFieldAttributes
]

const Dashboard: NextPage = () => {
	const onSubmit: SubmitHandler<FieldValues> = useCallback((formData) => {
		// eslint-disable-next-line no-console
		console.log('onSubmit', formData)
	}, [])

	const schemaFromFields = generateJoiSchema(fields)

	const methods = useForm<FieldValues>({
		resolver: joiResolver(schemaFromFields, {
			allowUnknown: true,
			abortEarly: false
		}),
		mode: 'onSubmit',
		reValidateMode: 'onBlur'
	})

	return (
		<Form
			methods={methods}
			layout="horizontal"
			onSubmit={onSubmit}
			fields={fields}
			bottomChild={
				<Button type="submit" variant="primary" className="ml-[8rem]">
					Submit Form
				</Button>
			}
		/>
	)
}

export default Dashboard
