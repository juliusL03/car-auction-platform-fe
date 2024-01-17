import clsx from 'clsx'
import Image from 'next/image'
import {Badge} from 'antd'
import {useEffect, useState} from 'react'
import Link from 'next/link'

import exampleImage from '@/assets/images/4-2-car-png-hd.png'
import Button from '@/components/common/elements/Button'

import BidInput from '../BidInput'
import useLogic from '../useLogic'

import styles from './car.module.scss'
import {ItemProps} from './type'

const CarInfo: React.FC<ItemProps> = ({id}) => {
	const {product, user, getProduct, error, bid, NotificationContextHolder, createBid, getBid, authenticated, bidCreated, openNotification, setBidCreated, ENotificationType} = useLogic()
	const [bidValue, setBidValue] = useState(0)

	useEffect(() => {
		if (bidCreated) {
			openNotification(ENotificationType.Success, 'New Bid successfully sent')
			setBidCreated(false)
			getProduct(id)
		}

		if(error) {
			openNotification(ENotificationType.Error, error as string)
			setBidCreated(false)
			getProduct(id)
		}
	}, [ENotificationType.Error, ENotificationType.Success, bidCreated, error, getProduct, id, openNotification, setBidCreated])

	useEffect(() => {
		getProduct(id)
		getBid(id)
	},[getBid, getProduct, id])

	let filter = {product_id: product?._id, product: product?._id,
		user_id: user?._id}

	if(bid?._id) {
		filter = {
			product_id: product?._id,
			product: product?._id,
			user_id: user?._id,
			_id: bid._id
		}
	}

	const onBid = () => {
		createBid({
			filter,
			update: {
				amount: bidValue.toString()
			}
		})
	}

	return (
		<div className={clsx(styles.container)}>
			{NotificationContextHolder}
			<div className={clsx(styles.item)}>
				<div className={clsx(styles.title)}>
					<span>{product?.year} </span>
					<span>{product?.brand_name}</span>
				</div>
				
				<div className={clsx(styles.img)}>
					<Image src={product?.image ? product.image : exampleImage} width={320} alt={'item image'} />
					<div className={clsx(styles.content)}>
						<h4>Bid Information</h4>
						<div className={styles.badge}>Status: <Badge count={product?.status} style={product?.status === 'active'? {backgroundColor: '#52c41a'} : {backgroundColor: '#EB1E2B'}}/></div>
						<hr className={clsx(styles.hr)} />
						<span>Color: {product?.color}</span>
						<hr className={clsx(styles.hr)} />
						<span>Current Bid: <span className={clsx(styles.currentBid)}> {product?.current_bid ? `$ ${product.current_bid} USD` : 'not yet'}</span></span>
						<hr className={clsx(styles.hr)} />
						{product?.user_id !== user?._id && authenticated && product?.status === 'active' ? <><div className={clsx(styles.bidInput)}>
							<div className={clsx(styles.bidIncrement)}>
								<span>Maximum Bid</span>
								<span>(25 USD increment)</span>
							</div>
							<BidInput setValue={setBidValue} value={bidValue} currentBid={product?.current_bid} />
						</div><Button variant="orange" onClick={onBid} >Bid Now</Button></> : product?.status !== 'active' ? 'Bid was End' :
							authenticated ? <span>Own Item</span> : <Link href={'/signup'} className={clsx(styles.signIn)}>Sign up now  <span className={clsx(styles.arrow)}>➤</span></Link>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarInfo