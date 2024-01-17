import {StateCreator} from 'zustand'
import {isArray} from 'lodash'

import ProductApi from '@/apis/product'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'
import {TProduct} from '@/utils/models/product'

import {
	TCreateProductPayload,
	TGetProductListParams,
	TProductSlice
} from './types'

const productSlice: StateCreator<TProductSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	product: null,
	products: [],
	totalProductCount: 0,
	productCreated: false,
	productDeleted: false,
	productUpdated: false,
	createProduct: async (payload: TCreateProductPayload) => {
		set((state) => ({...state, loading: true, ProductCreated: false}))

		try {
			const {data, error, message} = await ProductApi.createProduct(payload)

			if (!data && error) {
				set((state) => ({...state, loading: false, message: error}))
			}

			set((state) => ({...state, loading: false, ProductCreated: true, message: message, product: data as unknown as TProduct}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getProduct: async (id) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data, error} = await ProductApi.getProduct(id)

			if (!data && error) {
				set((state) => ({...state, loading: false, message: error}))
			}

			set((state) => ({...state, loading: false, product: data as TProduct}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getProductList: async (params: TGetProductListParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data} = await ProductApi.getProductList(params)
			const countList = isArray(data) ? data.length : 0
			if (!data) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, totalProductCount: countList, products: data as TProduct[]}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateProduct: async (payload) => {
		set((state) => ({...state, loading: true, productUpdated: false}))

		try {
			const {data, error, message} = (await ProductApi.updateProduct(payload))

			if (isEmpty(data) && error) {
				set((state) => ({...state, loading: false, error}))
			}

			set((state) => ({...state, loading: false, productUpdated: true, message, product: data as TProduct}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteProduct: async (id) => {
		set((state) => ({...state, loading: true, productDeleted: false}))

		try {
			await ProductApi.deleteProduct(id)

			set((state) => ({...state, loading: false, product: null, productDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TProductSlice} from './types'

export default productSlice

