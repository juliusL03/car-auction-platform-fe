import {TDefaultListResponse, TOmittedFields, TSliceError, TUpdateOmittedFields} from '@/models/common'
import {TProduct} from '@/models/product'

export type TCreateUpdateProductPayload = Omit<TProduct, TOmittedFields>

export type TGetProductListParams = {
	page?: number | null
	limit?: number | null
	sort?: string | null
	order?: 'asc' | 'desc' | null
	description_like?: string | null
	user_id?: string | undefined
}

type TProductUpdate = {
 filter: {_id?: string},
 data: {
  status?: string
  deleted_at?: Date | undefined | null
 }
}

export type TCreateProductPayload = Omit<TProduct, TOmittedFields>
export type TUpdateProductPayload = Omit<TProductUpdate, TUpdateOmittedFields>

export type TCreateProductResponse = TDefaultListResponse<TProduct>
export type TUpdateProductResponse = TDefaultListResponse<TProduct>
export type TGetProductResponse = TDefaultListResponse<TProduct>
export type TGetProductDataResponse = TDefaultListResponse<TProduct>
export type TGetProductListResponse = TDefaultListResponse<TProduct>

export type TProductSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	product: TProduct | null
	products: TProduct[]
	totalProductCount: number
	productCreated: boolean
	productDeleted: boolean
	productUpdated: boolean
	createProduct: (payload: TCreateProductPayload) => void
	getProduct: (id: string | null) => void
	getProductList: (payload: TGetProductListParams) => void
	updateProduct: (payload: TUpdateProductPayload) => void
	deleteProduct: (id: string) => void
}

export type TProductResponse = {
	message?: string
	success: boolean
	total_count?: number
	data?: TProduct | TProduct[] | TProduct
}
