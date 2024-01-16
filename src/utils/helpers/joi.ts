import Joi from 'joi'

import {
	ArrayFieldAttributes,
	DatePickerAttributes,
	FieldTypes,
	InputAttributes,
	JsonFieldAttributes,
	SelectAttributes,
	TextAreaAttributes,
	TField
} from '@/components/common/forms/types'

import {
	arrayValidation,
	booleanValidation,
	dateValidation,
	emailValidation,
	jsonValidation,
	numberValidation,
	selectValidation,
	stringValidation
} from './field-validation'

const generateJoiSchema = (fields: TField[]) => {
	const schema: Record<string, Joi.AnySchema> = {}

	fields?.forEach((field: TField) => {
		switch (field.type) {
			case FieldTypes.TEXT || FieldTypes.PASSWORD || FieldTypes.EMAIL:
				field = field as InputAttributes
				stringValidation(field, schema)
				break
			case FieldTypes.EMAIL:
				field = field as InputAttributes
				emailValidation(field, schema)
				break
			case FieldTypes.TEXTAREA:
				field = field as TextAreaAttributes
				stringValidation(field, schema)
				break
			case FieldTypes.NUMBER:
				field = field as InputAttributes
				numberValidation(field, schema)
				break
			case FieldTypes.RADIO:
			case FieldTypes.SELECT:
				field = field as SelectAttributes
				selectValidation(field, schema)
				break
			case FieldTypes.ARRAY:
				field = field as ArrayFieldAttributes
				arrayValidation(field, schema)
				break
			case FieldTypes.SWITCH:
				booleanValidation(field, schema)
				break
			case FieldTypes.JSON:
				field = field as JsonFieldAttributes
				jsonValidation(field, schema)
				break
			case FieldTypes.DATE:
				field = field as DatePickerAttributes
				dateValidation(field, schema)
				break
			default:
				break
		}
	})
	
	const customMessages = {
		'string.base': 'Field should be a type of text',
		'string.empty': 'Field cannot be empty',
		'string.email': 'Field should be a valid email address',
		'any.required': 'Field is required'
	}

	return Joi.object(schema).messages(customMessages)
}

export default generateJoiSchema
