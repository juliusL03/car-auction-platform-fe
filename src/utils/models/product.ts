export type TProduct = {
	user_id: string | undefined
	brand_name: string
	year: string
	color: string
 mileage: string
 image: string
	status: string
 start_bid: string
 current_bid: string
 expiry_date: string
	created_at: string
	updated_at: string
 _id: string
}

export type TLineItem = {
	_id?: string
	description: string
	price: number
	ext_product_product_id?: string
}

export type TRecipient = {
	name: string
	email: string
	phone: string
	company_name: string
	company_address_line_1: string
	company_address_line_2: string
	company_address_state: string
	company_address_zip: string
	company_address_country: string
}

export type TIssuer = {
	company_name: string
	company_logo: string
	company_address_line_1: string
	company_address_line_2: string
	company_address_state: string
	company_address_zip: string
	company_address_country: string
}

export enum EProductStatus {
	ACTIVE = 'active',
	INACTIVE = 'inactive'
}

export enum EProductType {
	Receivable = 'receivable',
	Payable = 'payable'
}

export type TProductData = TProduct
