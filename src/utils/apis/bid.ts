import {
	TCreateBidPayload,
	TCreateBidResponse,
	TGetBidDataResponse,
	TGetBidListParams,
	TGetBidListResponse,
	TGetBidResponse,
	TUpdateBidPayload,
	TUpdateBidResponse
} from '@/store/slices/bid/types'

import endpoints from './endpoints'

import {axiosCustomURLInstance,  axiosInstance, getHeaders} from '.'

const headers = getHeaders()
const axiosCustom = axiosCustomURLInstance(`${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}/v1`)

export const createBid = async (payload: TCreateBidPayload): Promise<TCreateBidResponse> => {
	return (await axiosCustom.post(endpoints.BID_CREATE, payload, {headers})).data
}

export const getBid = async (id: string | null): Promise<TGetBidResponse> => {
	return (await axiosCustom.get(`${endpoints.BID}/${id}`, {headers})).data
}

export const getBidData = async (id: string): Promise<TGetBidDataResponse> => {
	return (await axiosInstance.get(`${endpoints.BID}/${id}`, {headers})).data
}

export const getBidList = async (params: TGetBidListParams): Promise<TGetBidListResponse> => {
	return (await axiosCustom.get(endpoints.BID, {params, headers})).data
}

export const updateBid = async (
	id: string,
	payload: TUpdateBidPayload
): Promise<TUpdateBidResponse> => {
	return (await axiosCustom.patch(`${endpoints.BID_UPDATE}/${id}`, payload, {headers})).data
}

export const deleteBid = async (id: string): Promise<unknown> => {
	return (await axiosCustom.delete(`${endpoints.BID}/${id}`, {headers})).data
}

export const deleteBids = async (ids: string[]): Promise<unknown> => {
	const promises = ids.map(async (id) => await deleteBid(id))
	await Promise.all(promises)
	return {success: true}
}

const BidApi = {
	createBid,
	deleteBid,
	deleteBids,
	getBid,
	getBidData,
	updateBid,
	getBidList
}

export default BidApi
