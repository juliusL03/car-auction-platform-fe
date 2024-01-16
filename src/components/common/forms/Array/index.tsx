import clsx from 'clsx'
import React from 'react'
import {useFormContext} from 'react-hook-form'

import Repeater from '@/elements/Repeater'
import {ArrayFieldAttributes, FieldTypes, InputAttributes, JsonFieldAttributes, TLabel} from '@/forms/types'
import JsonField from '@/forms/Json'

import InputField from '../InputField'

import styles from './array.module.scss'


const Array: React.FC<ArrayFieldAttributes> = ({
	labelWidth,
	name,
	label,
	item,
	required,
	layout = 'horizontal',
}) => {
	const {getValues} = useFormContext()

	const count = getValues(name)?.length || 1

	return (
		<div className={clsx(styles[layout])}>
			<div className={styles.fieldsContainer}>
				<Repeater name={name} itemClassName={styles.item} count={count}>
					{(i) => (
						<div className={clsx(styles.itemInner)}>
							{item?.type as FieldTypes === FieldTypes.JSON ? (
								<JsonField type={(item as JsonFieldAttributes)?.type} subFields={(item as JsonFieldAttributes)?.subFields} labelWidth={labelWidth} name={`${name}[${i}]`} label={label} required={required} />
							) : (
								<InputField {...(item as InputAttributes)} labelWidth={labelWidth} name={`${name}[${i}]`} label={label as TLabel} required={required} />
							)}
						</div>
					)}
				</Repeater>
			</div>
		</div>
	)
}

export default Array
