import {useEffect} from 'react'

import useStore from '@/utils/store'



const useLogic = () => {

	const {
		loading,
		error,
		user,
		products,
		getProductList,
		updateProduct
	} = useStore(
		(state) => ({
			loading: state.loading,
			error: state.error,
			products: state.products,
			getProductList: state.getProductList,
			user: state.user,
			updateProduct: state.updateProduct
		})
	)

	useEffect(() => {
		getProductList({
			page: 1, limit: 10,
			user_id: user?._id
		})
	}, [getProductList, user?._id])

	const stopBid = (payload: any) => {
		updateProduct({
			filter: {_id: payload._id},
			data: {status: payload.status === 'active' ? 'inactive' : 'active'}
		})

		getProductList({
			page: 1, limit: 10,
			user_id: user?._id
		})
	}

	const archiveBid = (payload: any) => {
		updateProduct({
			filter: {_id: payload._id},
			data: {deleted_at: new Date}
		})

		getProductList({
			page: 1, limit: 10,
			user_id: user?._id
		})
	}

	return {
		error,
		loading,
		products,
		user,
		stopBid,
		archiveBid
	}
}

export default useLogic
