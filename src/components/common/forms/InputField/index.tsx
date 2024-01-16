import Checkbox from '@/components/common/forms/Checkbox'
import Datepicker from '@/components/common/forms/Datepicker'
import ControlledField from '@/components/common/forms/Form/ControlledField'
import {CheckboxAttributes, DatePickerAttributes, FieldTypes, InputAttributes, RadioAttributes, SelectAttributes, SwitchAttributes, TextAreaAttributes, TField} from '@/components/common/forms/types'
import Input from '@/components/common/forms/Input'
import Radio from '@/components/common/forms/Radio'
import Select from '@/components/common/forms/Select'
import Switch from '@/components/common/forms/Switch'
import TextArea from '@/components/common/forms/TextArea'
import {EmailIcon, PasswordIcon} from '@/assets/icon'

const InputField: React.FC<TField> = (props) => (
	<ControlledField
		name={props.name}
		render={({field, fieldState: {invalid}, formState: {isLoading, errors}}) => {
			const consolidated = {isloading: isLoading, errors, invalid}

			switch (props.type) {
				case FieldTypes.TEXT:
					return <Input {...(props as InputAttributes)} {...field} {...consolidated} />
				case FieldTypes.EMAIL:
					return <Input prefixIcon={<EmailIcon/>} {...(props as InputAttributes)} {...field} {...consolidated} />
				case FieldTypes.TEXTAREA:
					return (
						<TextArea
							{...(props as TextAreaAttributes)}
							type={FieldTypes.TEXTAREA}
							{...field}
							{...consolidated}
						/>
					)
				case FieldTypes.PASSWORD:
					return <Input prefixIcon={<PasswordIcon/>} {...(props as InputAttributes)} {...field} {...consolidated} />
				case FieldTypes.NUMBER:
					return <Input {...(props as InputAttributes)} {...field} {...consolidated} />
				case FieldTypes.SELECT:
					return <Select {...(props as SelectAttributes)} {...field} {...consolidated} />
				case FieldTypes.RADIO:
					return <Radio {...(props as RadioAttributes)} {...field} {...consolidated} />
				case FieldTypes.SWITCH:
					return <Switch {...(props as SwitchAttributes)} {...field} {...consolidated} />
				case FieldTypes.CHECKBOX:
					return <Checkbox {...(props as CheckboxAttributes)} {...field} {...consolidated} />
				case FieldTypes.DATE:
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const {ref, ...newField} = field
					return <Datepicker {...(props as DatePickerAttributes)} {...field} {...consolidated} />
				default:
					return <></>
			}
		}}
	/>
)

export default InputField
