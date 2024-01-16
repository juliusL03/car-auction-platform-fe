import {ErrorMessage} from '@hookform/error-message'
import clsx from 'clsx'
import React, {forwardRef} from 'react'

import styles from './checkbox.module.scss'
import {CheckboxProps} from './types'

const Checkbox: React.FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			type = 'checkbox',
			name,
			value = '',
			label,
			size = 'sm',
			rounded,
			errors,
			isloading,
			invalid,
			layout = 'horizontal',
			labelWidth,
			className,
			checked,
			...props
		},
		ref
	) => (
		<div className={clsx(styles[layout], invalid && styles['error'], className)}>
			<div className={styles.inputContainer}>
				<input
					type={type}
					name={name}
					value={value}
					disabled={isloading}
					checked={checked}
					{...props}
					className={clsx(
						styles.input,
						styles[size],
						rounded && styles.rounded,
						invalid && styles['error'],
					)}
					ref={ref}
				/>
				{errors && (
					<ErrorMessage
						errors={errors}
						name={name}
						render={({message}) => (
							<span className={clsx(styles.errorMessage, invalid && styles['error'])}>{message}</span>
						)}
					/>
				)}

				{label && (
					<label
						htmlFor={name}
						className={clsx(styles.label, invalid && styles['error'], styles[`width-${labelWidth}`])}
					>
						{label}
					</label>
				)}
			</div>

		</div>
	)
)

export default Checkbox
