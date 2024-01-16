import clsx from 'clsx'
import Image from 'next/image'
import {Badge} from 'antd'

import exampleImage from '@/assets/images/4-2-car-png-hd.png'
import Button from '@/components/common/elements/Button'

import BidInput from '../BidInput'

import styles from './car.module.scss'
import {ItemProps} from './type'
import {items} from './itemList'

const CarInfo: React.FC<ItemProps> = ({id}) => {
	const data = items.filter(item => item.productId.includes(id ? id : ''))
	return (
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.item)}>
				<div className={clsx(styles.title)}>
					<span>{data[0].year} </span>
					<span>{data[0].carBrand}</span>
				</div>
				
				<div className={clsx(styles.img)}>
					<Image src={data[0].image ? data[0].image : exampleImage} width={320} alt={'item image'} />
					<div className={clsx(styles.content)}>
						<h4>Bid Information</h4>
						<div className={styles.badge}>Status: <Badge count={data[0].status} style={{backgroundColor: '#52c41a'}}/></div>
						<hr className={clsx(styles.hr)} />
						<span>Color: {data[0].color}</span>
						<hr className={clsx(styles.hr)} />
						<span>Current Bid: <span className={clsx(styles.currentBid)}>${data[0].startBid} USD</span></span>
						<hr className={clsx(styles.hr)} />
						<div className={clsx(styles.bidInput)}>
							<div className={clsx(styles.bidIncrement)}>
								<span>Maximum Bid</span>
								<span>(25 USD increment)</span>
							</div>
							<BidInput id={null} />
						</div>
						<Button variant="orange">Bid Now</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarInfo