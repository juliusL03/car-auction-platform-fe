import {StateCreator} from 'zustand'

import integrateApi from '@/utils/apis/integration'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'

import {TGetXeroIntegrationResponse, TIntegrateXeroResponse, TIntegrationSlice, TXeroSyncUnsyncResponse} from './types'

const integrationSlice: StateCreator<TIntegrationSlice> = (set) => ({
	loading: false,
	error: null,
	accountSynced: false,
	accountUnsynced: false,
	counterPartySynced: false,
	counterPartyUnsynced: false,
	invoiceSynced: false,
	invoiceUnsynced: false,
	xeroIntegration: null,
	customerSynced: false,
	customerUnsynced: false,
	setInvoiceSynced: (value: boolean) => {
		set((state) => ({...state, invoiceSynced: value}))
	},
	setInvoiceUnsynced: (value: boolean) => {
		set((state) => ({...state, invoiceUnsynced: value}))
	},
	setCustomerSynced: (value: boolean) => {
		set((state) => ({...state, customerSynced: value}))
	},
	setCustomerUnsynced: (value: boolean) => {
		set((state) => ({...state, customerUnsynced: value}))
	},
	setCounterPartiesSynced: (value: boolean) => {
		set((state) => ({...state, counterPartySynced: value}))
	},
	setCounterPartiesUnsynced: (value: boolean) => {
		set((state) => ({...state, counterPartyUnsynced: value}))
	},
	integrateXero: async (payload) => {
		set((state) => ({...state, loading: true, error: null, xeroIntegration: null}))

		try {
			const xeroIntegration = (await integrateApi.integrateXero(payload)) as TIntegrateXeroResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getXeroIntegration: async () => {
		set((state) => ({...state, loading: true, error: null, xeroIntegration: null}))

		try {
			const xeroIntegration = (await integrateApi.getXeroIntegration()) as TGetXeroIntegrationResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	removeXeroIntegration: async () => {
		set((state) => ({...state, loading: true}))

		try {
			await integrateApi.removeXeroIntegration()

			set((state) => ({
				...state,
				loading: false,
				xeroIntegration: null
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	syncXeroAccounts: async () => {
		set((state) => ({...state, loading: true, accountSynced: false}))

		try {
			const xeroIntegration = (await integrateApi.syncXeroAccounts()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				accountSynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	unsyncXeroAccounts: async () => {
		set((state) => ({...state, loading: true, accountUnsynced: false}))

		try {
			const xeroIntegration = (await integrateApi.unsyncXeroAccounts()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				accountUnsynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	syncXeroCounterParties: async () => {
		set((state) => ({...state, loading: true, counterPartySynced: false}))

		try {
			const xeroIntegration = (await integrateApi.syncXeroCounterParties()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				counterPartySynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	unsyncXeroCounterParties: async () => {
		set((state) => ({...state, loading: true, counterPartyUnsynced: false}))

		try {
			const xeroIntegration = (await integrateApi.unsyncXeroCounterParties()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				counterPartyUnsynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	syncXeroInvoices: async () => {
		set((state) => ({...state, loading: true, invoiceSynced: false}))

		try {
			const xeroIntegration = (await integrateApi.syncXeroInvoices()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				invoiceSynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	unsyncXeroInvoices: async () => {
		set((state) => ({...state, loading: true, invoiceUnsynced: false}))

		try {
			const xeroIntegration = (await integrateApi.unsyncXeroInvoices()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				invoiceUnsynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	syncXeroCustomers: async () => {
		set((state) => ({...state, loading: true, customerSynced: false}))

		try {
			const xeroIntegration = (await integrateApi.syncXeroCustomers()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				customerSynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	unsyncXeroCustomers: async () => {
		set((state) => ({...state, loading: true, customerUnsynced: false}))

		try {
			const xeroIntegration = (await integrateApi.unsyncXeroCustomers()) as TXeroSyncUnsyncResponse

			if (isEmpty(xeroIntegration)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				customerUnsynced: true,
				xeroIntegration
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TIntegrationSlice} from './types'

export default integrationSlice
