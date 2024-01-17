import {useEffect} from 'react'

import useStore from '@/utils/store'



const useLogic = () => {

	const {
		loading,
		error,
		products,
		getProductList,
	} = useStore(
		(state) => ({
			loading: state.loading,
			error: state.error,
			products: state.products,
			getProductList: state.getProductList,
			user: state.user
		})
	)

	useEffect(() => {
		getProductList({
			page: 1, limit: 10, status: 'active'
		})
	}, [getProductList])

	return {
		error,
		loading,
		products
	}
}

export default useLogic
