import {ErrorMessage} from '@hookform/error-message'
import clsx from 'clsx'
import React, {forwardRef} from 'react'

import styles from './radio.module.scss'
import {RadioProps} from './types'

const Radio: React.FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			type,
			name,
			value,
			label,
			options,
			onChange,
			variant = 'primary',
			errors,
			isloading,
			invalid,
			layout = 'vertical',
			labelWidth,
			inputWidth,
			...props
		},
		ref
	) => (
		<div className={clsx(styles[layout], invalid && styles['error'])}>
			{label && (
				<label
					htmlFor={name}
					className={clsx(styles.label, invalid && styles['error'], styles[`width-${labelWidth}`])}
				>
					{label}
				</label>
			)}
			<div className={styles.radioContainer}>
				{options.map((option: any) => (
					<div key={option.value} className={clsx(styles.radioButtons, styles[`width-${inputWidth}`])}>
						<input
							type={type}
							id={option.value.toString()}
							name={name}
							value={option.value}
							checked={option.value === value}
							onChange={onChange}
							disabled={isloading}
							{...props}
							className={clsx(styles.radio, styles[variant])}
							ref={ref}
						/>
						<label htmlFor={option.value.toString()} className={clsx(styles.radioLabel)}>
							{option.label}
						</label>
					</div>
				))}
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
)

export default Radio
