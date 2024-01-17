const endpoints = {
	USER_AUTHENTICATE: '/user/authenticate',
	USER_SIGNUP: '/user/signup',
	USER_ME: '/user/me',
	USER_LOGOUT: '/user/logout',
	PRODUCT: '/product',
	PRODUCT_CREATE: 'product/create',
	PRODUCT_RETRIEVE:(id: string) => `product/${id}`,
	PRODUCT_UPDATE:'product/update',
	PRODUCT_FILTER: (page: string, limit: string, description_like: string, sort: string, order: string) => `product/filter/${page}/${limit}/${description_like}/${sort}/${order}`,
	BID_CREATE: '/bid/create',
	BID: '/bid',
	BID_UPDATE: '/bid/update'
}

export default endpoints
