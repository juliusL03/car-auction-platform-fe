import Joi from 'joi'

import {TOptions} from '@/components/common/forms/Select/types'
import {FieldTypes, JsonFieldAttributes, RadioAttributes, SelectAttributes} from '@/components/common/forms/types'

import generateJoiSchema from './joi'

const stringValidation = (field: any, schema: any) => {
	if (field.required) {
		schema[field.name] = Joi.string().required()
	}

	if (!field.required) {
		schema[field.name] = Joi.string().optional().allow('')
	}
}

const emailValidation = (field: any, schema: any) => {
	if (FieldTypes.EMAIL) {
		schema[field.name] = Joi.string()
			.required()
			.email({
				minDomainSegments: 2,
				tlds: {allow: false}
			})
	}

	if (!field.required && FieldTypes.EMAIL) {
		schema[field.name] = Joi.string().optional().allow('')
	}
}

const numberValidation = (field: any, schema: any) => {
	if (field.required) {
		schema[field.name] = Joi.number().required()
	} else {
		schema[field.name] = Joi.number().optional()
	}
}

const selectValidation = (field: any, schema: any) => {
	if (field.required) {
		schema[field.name] = Joi.string()
			.valid(...field.options.map((opt: TOptions) => opt?.value))
			.required()
	} else {
		schema[field.name] = Joi.string()
			.valid(...field.options.map((opt: TOptions) => opt.value))
			.optional()
	}
}

const dateValidation =  (field: any, schema: any) => {
	if (field.required) {
		schema[field.name] = Joi.object().required()
	}

	if (!field.required) {
		schema[field.name] = Joi.object().optional().allow('')
	}
}

const arrayValidation =  (field: any, schema: any) => {
	let itemSchema

	if (field.item.type === FieldTypes.JSON) {
		itemSchema = generateJoiSchema((field?.item as JsonFieldAttributes).subFields)
	} else if (field.item.type === FieldTypes.NUMBER) {
		itemSchema = Joi.number()
	} else if ([FieldTypes.RADIO, FieldTypes.SELECT].includes(field.item.type)) {
		itemSchema = Joi.string().valid(
			...(field?.item as RadioAttributes | SelectAttributes)?.options?.map((opt: TOptions) => opt.value)
		)
	} else if (field.item.type === FieldTypes.SWITCH) {
		itemSchema = Joi.boolean()
	} else {
		itemSchema = Joi.string()
	}

	if (field.required) {
		schema[field.name] = Joi.array().items(itemSchema).required()
	} else {
		schema[field.name] = Joi.array().items(itemSchema).optional()
	}
}

const booleanValidation = (field: any, schema: any) => {
	if (field.required) {
		schema[field.name] = Joi.boolean().valid(true).required()
	} else {
		schema[field.name] = Joi.boolean().optional()
	}
}

const jsonValidation = (field: any, schema: any) => {
	if (field.required) {
		schema[field.name] = generateJoiSchema(field.subFields).required()
	} else {
		schema[field.name] = generateJoiSchema(field.subFields).optional()
	}
}

export {
	stringValidation,
	numberValidation,
	selectValidation,
	arrayValidation,
	booleanValidation,
	jsonValidation,
	emailValidation,
	dateValidation
}
