import {TDefaultListResponse, TOmittedFields, TSliceError, TUpdateOmittedFields} from '@/models/common'
import {EInvoiceStatus, TInvoice, TInvoiceData} from '@/models/invoice'

export type TCreateUpdateInvoicePayload = Omit<TInvoice, TOmittedFields>

export enum InvoiceType {
	Inward = 'inward',
	Outward = 'outward'
}

export type TGetInvoiceListParams = {
	page?: number | null
	limit?: number | null
	sort?: string | null
	order?: 'asc' | 'desc' | null
	status?: EInvoiceStatus | null
	description_like?: string | null
	reference_number_like?: string | null
}

export type TInvoicePayPayload = {
	ext_invoice_id: string | undefined
	payment_amount: number
	currency: string
	payment_date: string
	payment_note: string
	virtual_account_id?: string
	bank_account_id?: string
}

export type TInvoicePay = {
	id: string
	ext_virtual_account_id: string
	currency: string
	amount_due: number
	amount_pay: number
	source: string
	payment_date: string
	type_payment: string
}

export type TCreateInvoicePayload = Omit<TInvoice, TOmittedFields>
export type TUpdateInvoicePayload = Omit<TInvoice, TUpdateOmittedFields>

export type TCreateInvoiceResponse = TDefaultListResponse<TInvoice>
export type TUpdateInvoiceResponse = TDefaultListResponse<TInvoice>
export type TGetInvoiceResponse = TDefaultListResponse<TInvoice>
export type TGetInvoiceDataResponse = TDefaultListResponse<TInvoice>
export type TGetInvoiceListResponse = TDefaultListResponse<TInvoice>

export type TInvoiceSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	invoice: TInvoice | null
	invoices: TInvoice[]
	totalInvoiceCount: number
	invoiceCreated: boolean
	invoiceDeleted: boolean
	invoiceUpdated: boolean
	invoiceSentPay: boolean
 invoiceSentEmail: boolean
	invoiceSynced: boolean
	invoiceUnsynced: boolean
	invoiceData: TInvoiceData | null
	invoicePay: TInvoicePay | null
	createInvoice: (payload: TCreateInvoicePayload) => void
	getInvoice: (id: string) => void
	getInvoiceList: (payload: TGetInvoiceListParams) => void
	getInvoiceData: (id: string) => void
	updateInvoice: (id: string, payload: TUpdateInvoicePayload) => void
	deleteInvoice: (id: string) => void
	deleteInvoices: (ids: string[]) => void
	payInvoice: (payload: TInvoicePayPayload) => void
	setInvoiceCreated: (value: boolean) => void
	setInvoiceSentPay: (value: boolean) => void
 setInvoiceSentEmail: (value: boolean) => void
	setInvoiceDeleted: (value: boolean) => void
	setInvoiceUpdated: (value: boolean) => void
}

export type TInvoiceResponse = {
	message?: string
	success: boolean
	total_count?: number
	data?: TInvoice | TInvoice[] | TInvoiceData
}

export type TInvoicePayResponse = {
	message?: string
	success: boolean
	total_count?: number
	data?: TInvoicePay
}
