import useStore from '@/utils/store'
import useNotification, {ENotificationType} from '@/utils/hooks/useNotification'

const useLogic = () => {
	const {
		loading,
		error,
		user,
		product,
		getProduct,
		bid,
		createBid,
		getBid,
		authenticated,
		setBidCreated,
		bidCreated
	} = useStore(
		(state) => ({
			loading: state.loading,
			error: state.error,
			products: state.products,
			user: state.user,
			getProduct: state.getProduct,
			product: state.product,
			bid: state.bid,
			createBid: state.createBid,
			getBid: state.getBid,
			authenticated: state.authenticated,
			setBidCreated: state.setBidCreated,
			bidCreated: state.bidCreated
		})
	)

	const {openNotification, NotificationContextHolder} = useNotification()

	return {
		error,
		loading,
		user,
		product,
		getProduct,
		bid,
		createBid,
		getBid,
		authenticated,
		openNotification,
		NotificationContextHolder,
		setBidCreated,
		bidCreated,
		ENotificationType
	}
}

export default useLogic
