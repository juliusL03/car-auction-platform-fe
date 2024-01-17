import {TDefaultListResponse, TOmittedFields, TSliceError, TUpdateOmittedFields} from '@/models/common'
import {TBid} from '@/models/bid'

export type TCreateUpdateBidPayload = Omit<TBid, TOmittedFields>

export enum BidType {
	Inward = 'inward',
	Outward = 'outward'
}

export type TGetBidListParams = {
	page?: number | null
	limit?: number | null
	sort?: string | null
	order?: 'asc' | 'desc' | null
	description_like?: string | null
	user_id?: string | undefined
}

export type TBidPay = {
	id: string
	ext_virtual_account_id: string
	currency: string
	amount_due: number
	amount_pay: number
	source: string
	payment_date: string
	type_payment: string
}

type TCreateBid = {
	filter: {
  _id?: string | undefined,
  product_id?: string | undefined,
  user_id: string | undefined,
  product: string | undefined
 },
	update: {amount: string}
}

export type TCreateBidPayload = Omit<TCreateBid, TOmittedFields>
export type TUpdateBidPayload = Omit<TBid, TUpdateOmittedFields>

export type TCreateBidResponse = TDefaultListResponse<TBid>
export type TUpdateBidResponse = TDefaultListResponse<TBid>
export type TGetBidResponse = TDefaultListResponse<TBid>
export type TGetBidDataResponse = TDefaultListResponse<TBid>
export type TGetBidListResponse = TDefaultListResponse<TBid>

export type TBidSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	bid: TBid | null
	bids: TBid[]
	totalBidCount: number
	bidCreated: boolean
	bidDeleted: boolean
	bidUpdated: boolean
	createBid: (payload: TCreateBidPayload) => void
	getBid: (id: string | null) => void
	getBidList: (payload: TGetBidListParams) => void
	updateBid: (id: string, payload: TUpdateBidPayload) => void
	deleteBid: (id: string) => void
 setBidCreated: (value: boolean) => void
}

export type TBidResponse = {
	message?: string
	success: boolean
	total_count?: number
	data?: TBid | TBid[] | TBid
}

export type TBidPayResponse = {
	message?: string
	success: boolean
	total_count?: number
	data?: TBidPay
}