import clsx from 'clsx'
import React from 'react'
import {FormProvider} from 'react-hook-form'


import Fields from '../Fields'
import {FormProps} from '../types'

import styles from './form.module.scss'

const Form: React.FC<FormProps> = ({
	methods,
	onSubmit = () => null,
	fields,
	layout = 'horizontal',
	bottomChild,
	topChild,
	partial = false,
	...props
}) => {

	return (
		<FormProvider {...methods}>
			{partial ? (
				<>
					{topChild}
					<Fields fields={fields} layout={layout} />
					{bottomChild}
				</>
			) : (
				<form onSubmit={methods.handleSubmit(onSubmit)} {...props} className={clsx(styles.form)} noValidate>
					{topChild}
					<Fields fields={fields} layout={layout} />
					{bottomChild}
				</form>
			)
			}

		</FormProvider >
	)
}

export {default as ControlledField} from './ControlledField'
export {default as InputField} from '../InputField'

export default Form
