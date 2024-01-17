import clsx from 'clsx'
import {NextPage} from 'next'

import styles from './auction.module.scss'
import Card from './Card'
import useLogic from './useLogic'


const AuctionList: NextPage = () => {
	const {products} = useLogic()
	return (
		<div className={clsx(styles.container)}>
			{products.map(item => (
				<Card 
					key={item.brand_name}
					image={''}
					carBrand={item.brand_name}
					year={item.year}
					color={item.color}
					status={item.status}
					startBid={item.current_bid}
					expiryDate={item.expiry_date} 
					productId={item._id}			
				/>
			))}
			
		</div>
	)
}

export default AuctionList
