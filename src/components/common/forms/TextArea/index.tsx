import {ErrorMessage} from '@hookform/error-message'
import clsx from 'clsx'
import React, {forwardRef} from 'react'

import styles from './textarea.module.scss'
import {TextAreaProps} from './types'

const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			name,
			value = '',
			onChange,
			placeholder,
			label,
			size = 'md',
			rounded,
			errors,
			isloading,
			invalid,
			layout = 'horizontal',
			labelWidth,
			inputWidth,
			width,
			className,
			rows,
			cols,
			required,
			...props
		},
		ref
	) => {
		return (
			<div className={clsx(styles[layout], invalid && styles['error'], `w-${width}`)}>
				{label && (
					<label
						htmlFor={name}
						className={clsx(styles.label, invalid && styles['error'], styles[`width-${labelWidth}`])}
					>
						{label}
					</label>
				)}
				<div className={styles.inputContainer}>
					<textarea
						name={name}
						rows={rows}
						cols={cols}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						disabled={isloading}
						required = {required}
						{...props}
						className={clsx(
							styles.textarea,
							styles[size],
							rounded && styles.rounded,
							invalid && styles['error'],
							`w-${inputWidth}`,
							className
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
				</div>
			</div>
		)
	}
)

export default TextArea
