import clsx from 'clsx'
import {NextPage} from 'next'

import styles from './auction.module.scss'
import Card from './Card'
import {items} from './itemList'


const AuctionList: NextPage = () => {
	return (
		<div className={clsx(styles.container)}>
			{items.map(item => (
				<Card 
					key={item.carBrand}
					image={item.image}
					carBrand={item.carBrand}
					year={item.year}
					color={item.color}
					status={item.status}
					startBid={item.startBid}
					expiryDate={item.expiryDate} 
					productId={item.productId}			
				/>
			))}
			
		</div>
	)
}

export default AuctionList
