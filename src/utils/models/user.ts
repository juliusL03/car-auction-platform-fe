export type TAddressData = {
	address_line_1: string
	address_line_2: string
	city: string
	state: string
	zip_code: string
	country: string
}

export type TOrganizationData = {
	name: string
	type: string
	address: TAddressData
}

export type TUserData = {
	_id: string
	first_name: string
	last_name: string
	email: string
	age: number
	gender: string
	password: string
	confirm_password: string
	deleted_at: string
	created_at: string
	updated_at: string
}
