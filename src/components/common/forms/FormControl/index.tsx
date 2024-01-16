import {ErrorMessage} from '@hookform/error-message'
import {Typography} from 'antd'
import clsx from 'clsx'
import {ReactNode} from 'react'
import {Controller, ControllerProps, FieldErrors, FieldValues} from 'react-hook-form'

type TProps = {
	label?: string | ReactNode
	required?: boolean
	errors: FieldErrors<FieldValues>
	className?: string
}

const FormControl: React.FC<TProps & ControllerProps> = ({label, required, errors, className, ...props}) => {
	return (
		<div className={clsx('text-red-500', className)}>
			{!!label && (
				<Typography.Text className="flex gap-1 items-center">
					{required && <span className="text-red-500">*</span>}
					<span className="font-medium">{label}</span>
				</Typography.Text>
			)}
			<Controller {...props} />
			<ErrorMessage errors={errors} name={props.name} />
		</div>
	)
}

export default FormControl
