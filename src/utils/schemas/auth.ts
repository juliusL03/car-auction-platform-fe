import Joi from 'joi'

const schema = Joi.object().keys({
	email: Joi.string()
		.email({tlds: {allow: false}})
		.required(),
	password: Joi.string().required()
})

export default schema
