/* eslint-disable @typescript-eslint/no-unused-vars */
import {ErrorMessage} from '@hookform/error-message'
import {Input as InputAntd} from 'antd'
import clsx from 'clsx'
import React, {forwardRef, ReactNode} from 'react'

import styles from './input.module.scss'
import {InputProps} from './types'

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type,
			name,
			value,
			onChange,
			placeholder,
			label,
			size = 'md',
			rounded,
			errors,
			invalid,
			layout = 'horizontal',
			labelWidth = 'auto',
			inputWidth = 'auto',
			width = 'auto',
			className,
			prefixIcon,
			suffixIcon,
			...props
		}
	) => {
		// Cleanse attributes
		delete props.allowEmpty        
		return (
			<div className={clsx(styles[layout], invalid && styles['error'], `w-${width}`)}>
				{label && (
					<label htmlFor={name} className={clsx(styles.label, invalid && styles['error'], `w-${labelWidth}`)}>
						{label}
					</label>
				)}
				<div className={styles.inputContainer}>
					<InputAntd
						type={type}
						prefix={prefixIcon as ReactNode}
						suffix={suffixIcon}
						name={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						{...props}
						className={clsx(
							styles.input,
							// styles[size],
							rounded && styles.rounded,
							invalid && styles['error'],
							styles[`width-${inputWidth}`],
							className
						)}
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

export default Input
