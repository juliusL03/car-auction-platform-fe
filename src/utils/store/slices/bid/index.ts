import {StateCreator} from 'zustand'
import {isArray} from 'lodash'

import bidApi from '@/apis/bid'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'
import {TBid} from '@/utils/models/bid'

import {
	TBidSlice,
	TCreateBidPayload,
	TGetBidListParams
} from './types'

const bidSlice: StateCreator<TBidSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	bid: null,
	bids: [],
	totalBidCount: 0,
	bidCreated: false,
	bidDeleted: false,
	bidUpdated: false,
	createBid: async (payload: TCreateBidPayload) => {
		set((state) => ({...state, loading: true, bidCreated: false}))

		try {
			const {data, error, message} = await bidApi.createBid(payload)

			if (!data && error) {
				set((state) => ({...state, loading: false, message: error}))
			}

			set((state) => ({...state, loading: false, bidCreated: true, error: null, message: message, bid: data as unknown as TBid}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getBid: async (id) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data, error} = await bidApi.getBid(id)

			if (!data && error) {
				set((state) => ({...state, loading: false, message: error}))
			}

			set((state) => ({...state, loading: false, bid: data as TBid}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getBidList: async (params: TGetBidListParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data} = await bidApi.getBidList(params)
			const countList = isArray(data) ? data.length : 0
			if (!data) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, totalBidCount: countList, bids: data as TBid[]}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateBid: async (id, payload) => {
		set((state) => ({...state, loading: true, bidUpdated: false}))

		try {
			const {data, error, message} = (await bidApi.updateBid(id, payload))

			if (isEmpty(data) && error) {
				set((state) => ({...state, loading: false, error}))
			}

			set((state) => ({...state, loading: false, bidUpdated: true, message, bid: data as TBid}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteBid: async (id) => {
		set((state) => ({...state, loading: true, bidDeleted: false}))

		try {
			await bidApi.deleteBid(id)

			set((state) => ({...state, loading: false, bid: null, bidDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	setBidCreated: (value) => {
		set((state) => ({...state, bidCreated: value}))
	},
})

export {type TBidSlice} from './types'

export default bidSlice

