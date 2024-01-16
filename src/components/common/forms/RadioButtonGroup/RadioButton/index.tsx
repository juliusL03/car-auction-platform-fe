import clsx from 'clsx'
import {ReactNode} from 'react'

import {CheckIcon} from '@/assets/icon'
import LogoImage from '@/components/common/elements/LogoImage'
import {TLogo} from '@/utils/models/workflow'

import styles from './radio-button.module.scss'

export type TRadioButtonOption = {
	value: string
	label: string | ReactNode
	description?: string | ReactNode
	icon?: ReactNode
	logo?: TLogo
	disabled?: boolean
	actionButton?: ReactNode
}

type TProps = TRadioButtonOption & {
	checked: boolean
	onChange: (value: string) => void
}

const RadioButton: React.FC<TProps> = ({
	value,
	label,
	description,
	logo,
	icon,
	disabled,
	actionButton,
	checked,
	onChange
}) => (
	<label className={clsx(styles.radioButton, checked && styles.checked)}>
		{/* 
			TODO: Make this block as content params to be more dynamic
		*/}
		<div className="flex gap-2">
			{!!icon && <div className={clsx(styles.icon, checked && styles.checked)}>{icon}</div>}
			{!!logo && (
				<div className={clsx(styles.icon, checked && styles.checked)}>
					<LogoImage src={logo?.path} alt={logo?.alt} bordered />
				</div>
			)}

			<div className={clsx('flex flex-col text-gray-500', checked && 'text-primary')}>
				<span className="font-medium">{label}</span>
				<span>{description}</span>
				{actionButton}
			</div>
		</div>

		{/* --> */}

		<div>
			<input
				type="radio"
				value={value}
				checked={checked}
				disabled={disabled}
				onChange={() => onChange(value)}
				className={styles.radio}
			/>
			<span className={clsx(styles.customRadio, checked && styles.checked)}>{checked && <CheckIcon />}</span>
		</div>
	</label>
)

export default RadioButton
