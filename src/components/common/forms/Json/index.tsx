import clsx from 'clsx'
import React from 'react'

import {JsonFieldAttributes, TField} from '@/forms/types'

import InputField from '../InputField'

import styles from './json.module.scss'


const Json: React.FC<JsonFieldAttributes> = ({
	name,
	subFields,
	labelWidth,
	layout = 'horizontal'
}) => {
	return (
		<div className={clsx(styles[layout])}>
			<div className={styles.fieldsContainer}>
				{subFields?.map((subField: TField) => (
					<InputField
						key={`${name}.${subField.name}`}
						{...subField}
						name={`${name}.${subField.name}`}
						labelWidth={labelWidth}
						layout={layout === 'horizontal' ? 'vertical' : 'horizontal'}
					/>
				))}
			</div>
		</div>
	)
}

export default Json
