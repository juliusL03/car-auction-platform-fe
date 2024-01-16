import _ from 'lodash'
import {forwardRef, useEffect, useState} from 'react'
import Select from 'react-select/creatable'

type TValue = boolean | string | number

export type TOptions = {
	label: string
	value: TValue
}

type TProps = {
	placeholder: string
	options: TOptions[] | []
	value: string
	loading?: boolean
	disabled?: boolean
	menuPlacement?: 'top' | 'bottom' | 'auto'
	onChange: (value: TValue) => void
}

const createOption = (label: string): TOptions => ({
	label,
	value: label?.toLowerCase()?.replace(' ', '')
})

const CreatableSelect: React.FC<TProps> = forwardRef<any, TProps>(
	(
		{loading = false, disabled = false, menuPlacement = 'auto', options: defaultOptions, value, onChange, ...props},
		ref
	) => {
		const [options, setOptions] = useState<TOptions[]>(defaultOptions)

		useEffect(() => {
			if (defaultOptions.length > 0) {
				setOptions((prevOptions) => _.merge(prevOptions, defaultOptions))
			}
		}, [defaultOptions])

		useEffect(() => {
			const isValueExist = options.find((e) => e.value === value)

			if (!isValueExist && !!value) {
				setOptions((prevOptions) => [...prevOptions.filter((e) => e.value !== value), {...createOption(value)}])
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [value])

		return (
			<Select
				ref={ref}
				isLoading={loading}
				isDisabled={disabled}
				menuPlacement={menuPlacement}
				{...props}
				styles={{
					control: (baseStyles) => ({
						...baseStyles,
						borderRadius: '8px',
						fontSize: '16px'
					}),
					menu: (baseStyles) => ({
						...baseStyles,
						color: '#222222'
					}),
					placeholder: (baseStyles) => ({
						...baseStyles,
						color: '#d4cbcb'
					}),
					indicatorSeparator: (baseStyles) => ({...baseStyles, display: 'none'}),
					clearIndicator: (baseStyles) => ({
						...baseStyles,
						marginRight: '-15px'
					})
				}}
				isClearable
				options={options}
				value={options.find((e) => e.value === value) ?? null}
				onChange={(e) => onChange((e?.value as TValue) ?? null)}
			/>
		)
	}
)

export default CreatableSelect
