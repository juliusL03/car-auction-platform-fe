import {ErrorMessage} from '@hookform/error-message'
import clsx from 'clsx'
import React, {forwardRef} from 'react'

import styles from './select.module.scss'
import {SelectProps} from './types'


const Select: React.FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			name,
			value = '',
			options,
			onChange,
			label,
			size = 'md',
			rounded,
			errors,
			isloading,
			invalid,
			layout = 'horizontal',
			placeholder,
			labelWidth,
			inputWidth,
			width,
			className,
			...props
		},
		ref
	) => {
		return (
			<div className={clsx(styles[layout], invalid && styles['error'], `w-${width}`)}>
				{label && (
					<label
						htmlFor={name}
						className={clsx(styles.label, invalid && styles['error'], `w-${labelWidth}`)}
					>
						{label}
					</label>
				)}
				<div className={styles.selectContainer}>
					<select
						name={name}
						value={value}
						onChange={onChange}
						disabled={isloading}
						required
						{...props}
						className={clsx(
							styles.select,
							styles[size],
							rounded && styles.rounded,
							invalid && styles['error'],
							`w-${inputWidth}`,
							className
						)}
						ref={ref}
					>
						<option>{placeholder}</option>
						{options.map((opt: any) => (
							<option key={opt?.value} value={opt?.value}>
								{opt?.label}
							</option>
						))}
					</select>
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

export default Select
