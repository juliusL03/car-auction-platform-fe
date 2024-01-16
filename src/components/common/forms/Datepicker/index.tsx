import clsx from 'clsx'
import {ErrorMessage} from '@hookform/error-message'
import React, {memo} from 'react'
import {DatePicker as DatePickerAntd} from 'antd'
import dayjs from 'dayjs'

import styles from './datePicker.module.scss'
import {DatePickerProps} from './types'

const dateFormat = 'YYYY/MM/DD'

const DatePicker: React.FC<DatePickerProps> = ({
	name,
	onChange,
	value = new Date,
	label,
	size = 'md',
	placeholder,
	rounded,
	errors,
	invalid,
	layout = 'horizontal',
	labelWidth = 'auto',
	inputWidth = 'auto',
	width = 'auto',
	className,
	iconPosition = 'right'
}) => {
	return (
		<div className={clsx(styles[layout], invalid && styles['error'], `w-${width}`)}>
			{label && (
				<label htmlFor={name} className={clsx(styles.label, invalid && styles['error'], `w-${labelWidth}`)}>
					{label}
				</label>
			)}
			<div className={clsx(styles.inputContainer, iconPosition === 'left' && styles.reverseIcon)}>
				<DatePickerAntd
					value={value ? dayjs(value) : null}
					format={dateFormat}
					onChange={onChange}
					placeholder={placeholder}
					className={clsx(
						styles.input,
						styles[size],
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

export default memo(DatePicker)