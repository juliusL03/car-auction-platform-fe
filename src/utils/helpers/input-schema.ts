import {TOptions} from '@/components/common/elements/Dropdown/types'

export type TFieldProperty = {
	type: 'input' | 'input-number' | 'select' | 'radio'
	options?: TOptions[]
}

type TActionProperty = {
	[key: string]: TFieldProperty
}

type TMapSchemaField = {
	[key: string]: TActionProperty
}

export const mapSchemaToInputField: TMapSchemaField = {
	'paynow.payout.initiate.requested': {
		account_id: {type: 'input'},
		reference_number: {type: 'input'},
		payment_reference: {type: 'input'},
		currency: {
			type: 'select',
			options: [
				{label: 'USD', value: 'usd'},
				{label: 'SGD', value: 'sgd'}
			]
		},
		amount: {type: 'input-number'},
		purpose: {
			type: 'select',
			options: [
				{label: 'Business Expenses', value: 'BEXP'},
				{label: 'Bonus Payment', value: 'BONU'},
				{label: 'Credit Card Payment', value: 'CCRD'},
				{label: 'Collection Payment ', value: 'COLL'}
			]
		},
		'destination.account_name': {type: 'input'},
		'destination.account_no': {type: 'input'},
		'destination.swift_bic': {type: 'input'},
		'destination.bank_country_code': {type: 'input'},
		'destination.addresses.address': {type: 'input'},
		'advise_delivery.mode': {type: 'radio'},
		'advise_delivery.emails.email': {type: 'input'},
		'advise_delivery.phone_numbers.phone_number': {type: 'input'},
		'rmtlnf.payment_details.payment_detail': {type: 'input'},
		'rmtlnf.client_references.client_reference': {type: 'input'},
		'rmtlnf.invoice_details.invoice': {type: 'input'}
	}
}
