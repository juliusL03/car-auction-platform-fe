import {
	FieldErrors,
	FieldValues,
	useForm,
	UseFormGetValues,
	UseFormReset,
	UseFormSetValue,
	UseFormTrigger,
} from 'react-hook-form'
import React, {MemoExoticComponent, useCallback} from 'react'
import {joiResolver} from '@hookform/resolvers/joi'

import Form from '@/forms/Form'
import generateJoiSchema from '@/utils/helpers/joi'

import {TField} from '../types'

interface IMemoizedFormProps {
	renderFields?: string[]
}

export type TCustomFormReturn<TFieldValues extends FieldValues = FieldValues> = {
	errors: FieldErrors<FieldValues>
	getValues: UseFormGetValues<TFieldValues>
	reset: UseFormReset<TFieldValues>
	setValue: UseFormSetValue<TFieldValues>
	trigger: UseFormTrigger<TFieldValues>
	submit: () => void
	watch: any
	control: any
	Form: MemoExoticComponent<React.ComponentType<IMemoizedFormProps>>
}

export enum FormLayoutOptions {
	Horizontal = 'horizontal',
	Vertical = 'vertical',
	Inline = 'inline'
}

export enum EValidateModeOptions {
	OnChange = 'onChange',
	OnSubmit = 'onSubmit'
}

export type CustomFormOptions = {
	layout?: FormLayoutOptions
	reValidateMode?: EValidateModeOptions
}

type TUseCustomFormArg = {
	fields: TField[]
	values?: any
	onSubmit: (values: FieldValues) => void
	options?: CustomFormOptions
}

const useCustomForm = ({
	fields,
	values,
	onSubmit,
	options = {layout: FormLayoutOptions.Vertical, reValidateMode: EValidateModeOptions.OnChange}
}: TUseCustomFormArg): TCustomFormReturn => {
	const schemaFromFields = generateJoiSchema(fields)

	const methods = useForm<FieldValues>({
		resolver: joiResolver(schemaFromFields, {
			allowUnknown: true,
			abortEarly: false,
			convert: true
		}),
		mode: 'onBlur',
		values,
		reValidateMode: options?.reValidateMode
	})

	const {
		handleSubmit,
		trigger,
		getValues,
		reset,
		setValue,
		formState: {errors},
		watch,
		control
	} = methods

	const onSubmitCallback = useCallback(() => {
		onSubmit(getValues())
	}, [onSubmit, getValues])

	const submitForm = useCallback(async () => {
		const fieldsAreValid = await trigger()

		if (fieldsAreValid) {
			handleSubmit(onSubmit)()
		}
	}, [handleSubmit, onSubmit, trigger])

	const MemoizedForm: MemoExoticComponent<React.ComponentType<IMemoizedFormProps>> = React.memo(
		({renderFields}: IMemoizedFormProps) => {
			let fieldsToRender = fields

			if (!renderFields) {
				return (
					<Form
						methods={methods}
						onSubmit={onSubmitCallback}
						layout={options?.layout}
						fields={fieldsToRender}
					/>
				)
			}

			fieldsToRender = fields?.filter((field) => renderFields.includes(field.name))            

			return (
				<Form
					methods={methods}
					onSubmit={onSubmitCallback}
					layout={options?.layout}
					fields={fieldsToRender}
					partial
				/>
			)
		}
	)

	return {
		getValues,
		errors,
		reset,
		trigger,
		setValue,
		watch,
		control,
		submit: submitForm,
		Form: MemoizedForm,
	}
}

export default useCustomForm
