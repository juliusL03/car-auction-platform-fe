import Joi from 'joi'

const schema = Joi.object().keys({
	email: Joi.string()
		.email({tlds: {allow: false}})
		.required()
		.label('Email'),
	password: Joi.string().required(),
	confirm_password: Joi.string().valid(Joi.ref('password')).required()
})

export default schema
