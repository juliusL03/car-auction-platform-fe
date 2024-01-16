import React from 'react'

import InputField from '../InputField'
import JsonField from '../Json'
import ArrayField from '../Array'
import {ArrayFieldAttributes, FieldsProps, FieldTypes, JsonFieldAttributes} from '../types'

const Fields: React.FC<FieldsProps> = ({fields, layout = 'horizontal'}) => {
    
	return (
		<>
			{fields?.map((field, index) => {
				return field.type === FieldTypes.JSON ? (
					<JsonField key={index} {...(field as JsonFieldAttributes)} layout={field.layout || layout} />
				) : field.type === FieldTypes.ARRAY ? (
					<ArrayField key={index} {...(field as ArrayFieldAttributes)} layout={field.layout || layout} />
				) : (
					<InputField key={index} {...field} layout={field.layout || layout} />
				)
			})}
		</>
	)
}

export default Fields
