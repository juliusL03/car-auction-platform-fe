import React, {forwardRef} from 'react'

import RadioButton, {TRadioButtonOption} from './RadioButton'

type TProps = {
	options: TRadioButtonOption[]
	value: string
	onChange: (value: string) => void
}

const RadioButtonGroup: React.FC<TProps> = forwardRef<HTMLDivElement, TProps>(({options, value, onChange}, ref) => (
	<div className="grid grid-cols-2 gap-2" ref={ref}>
		{options?.map((option) => (
			<RadioButton key={option?.value} {...option} checked={option?.value === value} onChange={onChange} />
		))}
	</div>
))

export default RadioButtonGroup
