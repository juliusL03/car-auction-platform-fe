import {StateCreator} from 'zustand'
import {isArray} from 'lodash'

import invoiceApi from '@/apis/invoice'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'
import {TInvoice, TInvoiceData} from '@/utils/models/invoice'

import {
	TCreateInvoicePayload,
	TGetInvoiceListParams,
	TInvoicePayPayload,
	TInvoicePayResponse,
	TInvoiceSlice
} from './types'

const invoiceSlice: StateCreator<TInvoiceSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	invoice: null,
	invoices: [],
	totalInvoiceCount: 0,
	invoiceData: null,
	invoiceCreated: false,
	invoiceDeleted: false,
	invoiceUpdated: false,
	invoiceSentPay: false,
	invoiceSentEmail: false,
	invoiceSynced: false,
	invoiceUnsynced: false,
	invoicePay: null,
	setInvoiceCreated: (value) => {
		set((state) => ({...state, invoiceCreated: value}))
	},
	setInvoiceSentPay: (value) => {
		set((state) => ({...state, invoiceSentPay: value}))
	},
	setInvoiceSentEmail: (value) => {
		set((state) => ({...state, invoiceSentEmail: value}))
	},
	setInvoiceDeleted: (value) => {
		set((state) => ({...state, invoiceDeleted: value}))
	},
	setInvoiceUpdated: (value) => {
		set((state) => ({...state, invoiceUpdated: value}))
	},
	createInvoice: async (payload: TCreateInvoicePayload) => {
		set((state) => ({...state, loading: true, invoiceCreated: false}))

		try {
			const {data, error, message} = await invoiceApi.createInvoice(payload)

			if (!data && error) {
				set((state) => ({...state, loading: false, message: error}))
			}

			set((state) => ({...state, loading: false, invoiceCreated: true, message: message, invoice: data as unknown as TInvoice}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getInvoice: async (id) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data, error} = await invoiceApi.getInvoice(id)

			if (!data && error) {
				set((state) => ({...state, loading: false, message: error}))
			}

			set((state) => ({...state, loading: false, invoice: data as TInvoice}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getInvoiceList: async (params: TGetInvoiceListParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data} = await invoiceApi.getInvoiceList(params)
			const countList = isArray(data) ? data.length : 0
			if (!data) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, totalInvoiceCount: countList, invoices: data as unknown as TInvoice[]}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getInvoiceData: async (id) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data, error} = (await invoiceApi.getInvoiceData(id))

			if (isEmpty(data) && error) {
				set((state) => ({...state, loading: false}))
			}
			set((state) => ({...state, loading: false, invoiceData: data as TInvoiceData}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateInvoice: async (id, payload) => {
		set((state) => ({...state, loading: true, invoiceUpdated: false}))

		try {
			const {data, error, message} = (await invoiceApi.updateInvoice(id, payload))

			if (isEmpty(data) && error) {
				set((state) => ({...state, loading: false, error}))
			}

			set((state) => ({...state, loading: false, invoiceUpdated: true, message, invoice: data as TInvoice}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteInvoice: async (id) => {
		set((state) => ({...state, loading: true, invoiceDeleted: false}))

		try {
			await invoiceApi.deleteInvoice(id)

			set((state) => ({...state, loading: false, invoice: null, invoiceDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteInvoices: async (ids: string[]) => {
		set((state) => ({...state, loading: true, invoiceDeleted: false}))

		try {
			await invoiceApi.deleteInvoices(ids)

			set((state) => ({...state, loading: false, invoiceDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	payInvoice: async (payload: TInvoicePayPayload) => {
		set((state) => ({...state, loading: true, transactionCreated: false}))

		try {
			const {data: invoicePay, success, message} = (await invoiceApi.payInvoice(payload)) as TInvoicePayResponse

			if (!success) {
				set((state) => ({...state, loading: false, error: message}))
			}

			set((state) => ({...state, loading: false, invoicePay: invoicePay, invoiceSentPay: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TInvoiceSlice} from './types'

export default invoiceSlice
