import {
	TCreateProductPayload,
	TCreateProductResponse,
	TGetProductDataResponse,
	TGetProductListParams,
	TGetProductListResponse,
	TGetProductResponse,
	TUpdateProductPayload,
	TUpdateProductResponse
} from '@/store/slices/product/types'

import endpoints from './endpoints'

import {axiosCustomURLInstance,  axiosInstance, getHeaders} from '.'

const headers = getHeaders()
const axiosCustom = axiosCustomURLInstance(`${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}/v1`)

export const createProduct = async (payload: TCreateProductPayload): Promise<TCreateProductResponse> => {
	return (await axiosCustom.post(endpoints.PRODUCT_CREATE, payload, {headers})).data
}

export const getProduct = async (id: string | null): Promise<TGetProductResponse> => {
	return (await axiosCustom.get(`${endpoints.PRODUCT}/${id}`, {headers})).data
}

export const getProductData = async (id: string): Promise<TGetProductDataResponse> => {
	return (await axiosInstance.get(`${endpoints.PRODUCT}/${id}`, {headers})).data
}

export const getProductList = async (params: TGetProductListParams): Promise<TGetProductListResponse> => {
	return (await axiosCustom.get(endpoints.PRODUCT, {params, headers})).data
}

export const updateProduct = async (
	payload: TUpdateProductPayload
): Promise<TUpdateProductResponse> => {
	return (await axiosCustom.post(`${endpoints.PRODUCT_UPDATE}`, payload, {headers})).data
}

export const deleteProduct = async (id: string): Promise<unknown> => {
	return (await axiosCustom.delete(`${endpoints.PRODUCT}/${id}`, {headers})).data
}

export const deleteProducts = async (ids: string[]): Promise<unknown> => {
	const promises = ids.map(async (id) => await deleteProduct(id))
	await Promise.all(promises)
	return {success: true}
}

const ProductApi = {
	createProduct,
	deleteProduct,
	deleteProducts,
	getProduct,
	getProductData,
	updateProduct,
	getProductList
}

export default ProductApi
