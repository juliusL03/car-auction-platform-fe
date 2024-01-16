import {TSliceError} from '@/utils/models/common'

export type TXero = {
	ext_account_id: string
	client_id: string
	client_secret: string
	accounts_synced: boolean
	invoices_synced: boolean
	customers_synced: boolean
	counter_parties_synced: boolean
	updated_at?: string
}

export type TXeroSyncUnsyncPayload = {
	ext_account_id: string
}

export type TRemoveXeroIntegrationPayload = {
	ext_account_id: string
}

export type TGetXeroIntegrationPayload = {
	ext_account_id: string
}

export type TIntegrateXeroResponse = TXero
export type TGetXeroIntegrationResponse = TXero
export type TXeroSyncUnsyncResponse = TXero

export type TIntegrationSlice = {
	loading: boolean
	error: TSliceError
	xeroIntegration: TXero | null
	accountSynced: boolean
	accountUnsynced: boolean
	counterPartySynced: boolean
	counterPartyUnsynced: boolean
	invoiceSynced: boolean
	invoiceUnsynced: boolean
	customerSynced: boolean
	customerUnsynced: boolean
	setInvoiceSynced: (value: boolean) => void
	setInvoiceUnsynced: (value: boolean) => void
	setCustomerSynced: (value: boolean) => void
	setCustomerUnsynced: (value: boolean) => void
	setCounterPartiesSynced: (value: boolean) => void
	setCounterPartiesUnsynced: (value: boolean) => void
	integrateXero: (payload: TXero) => void
	syncXeroCounterParties: (payload: TXeroSyncUnsyncPayload) => void
	unsyncXeroCounterParties: (payload: TXeroSyncUnsyncPayload) => void
	syncXeroAccounts: (payload: TXeroSyncUnsyncPayload) => void
	unsyncXeroAccounts: (payload: TXeroSyncUnsyncPayload) => void
	syncXeroInvoices: (payload: TXeroSyncUnsyncPayload) => void
	unsyncXeroInvoices: (payload: TXeroSyncUnsyncPayload) => void
	syncXeroCustomers: (payload: TXeroSyncUnsyncPayload) => void
	unsyncXeroCustomers: (payload: TXeroSyncUnsyncPayload) => void
	getXeroIntegration: (payload: TGetXeroIntegrationPayload) => void
	removeXeroIntegration: (payload: TRemoveXeroIntegrationPayload) => void
}
