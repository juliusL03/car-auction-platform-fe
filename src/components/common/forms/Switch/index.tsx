import {ErrorMessage} from '@hookform/error-message'
import clsx from 'clsx'
import React, {forwardRef} from 'react'

import styles from './switch.module.scss'
import {SwitchProps} from './types'

const Switch: React.FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
	(
		{
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			type,
			name,
			value,
			onChange,
			variant = 'primary',
			label,
			size = 'md',
			errors,
			isloading,
			invalid,
			layout = 'horizontal',
			labelWidth,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			inputWidth,
			className,
			...props
		},
		ref
	) => {
		// adding peer classes here since it doesn't work inside scss module
		const peerClasses = 'peer peer-focus:ring-4 peer-checked:after:border-white peer-checked:after:translate-x-full'

		const variantClasses: {[key: string]: string} = {
			primary: 'peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600',
			danger: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
			success: 'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
			warning: 'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-600',
			info: 'peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 peer-checked:bg-sky-600'
		}

		const checkboxClasses = clsx(styles.checkbox, size)

		return (
			<div className={clsx(styles[layout])}>
				<span className={clsx(styles.dummyLabel, styles[`w-${labelWidth}`])} />
				<label className={clsx(styles.container, invalid && styles['error'])}>
					<input
						type="checkbox"
						name={name}
						value={value}
						onChange={onChange}
						disabled={isloading}
						{...props}
						checked={!!value}
						className={`peer ${checkboxClasses}`}
						ref={ref}
					/>
					<div
						className={clsx(styles.switch, styles[size], peerClasses, variantClasses[variant], className)}
					/>
					{label && <span className={clsx(styles.label)}>{label}</span>}
					{errors && (
						<ErrorMessage
							errors={errors}
							name={name}
							render={({message}) => (
								<span className={clsx(styles.errorMessage, invalid && styles['error'])}>{message}</span>
							)}
						/>
					)}
				</label>
			</div>
		)
	}
)

export default Switch
