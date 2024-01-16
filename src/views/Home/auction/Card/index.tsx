import clsx from 'clsx'
import Image from 'next/image'
import {Badge} from 'antd'
import Link from 'next/link'

import exampleImage from '@/assets/images/4-2-car-png-hd.png'

import styles from './card.module.scss'
import {ItemProps} from './type'

const Card: React.FC<ItemProps> = ({image, carBrand, year, color, status, startBid, productId}) => {
	return (
		<div className={clsx(styles.container)}>
			<div className={styles.badge}><Badge count={status} style={{backgroundColor: '#52c41a'}}/></div>
			<div className={clsx(styles.img)}><Image src={image ? image : exampleImage} width={220} alt={'item image'} /></div>
			<div className={clsx(styles.content)}>
				<div className={clsx(styles.title)}>
					<span>{year} </span>
					<span>{carBrand}</span>
				</div>
				<span>Color: {color}</span>
				<span>Current Bid: <span className={clsx(styles.currentBid)}>${startBid}</span></span>
				
				<Link className={styles.viewDetails} href={{
					pathname: '/car',
					query: {id: productId}
				}}>View Details</Link>
				
			</div>
		</div>
	)
}

export default Card