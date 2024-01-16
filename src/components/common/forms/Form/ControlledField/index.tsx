import {Controller, ControllerProps, useFormContext} from 'react-hook-form'


const ControlledField = ({...props}: ControllerProps) => {
	const {control} = useFormContext()
	return <Controller {...props} control={control} />
}

export default ControlledField
