/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Image from 'next/image'

import styles from './cardItem.module.scss'
import {ItemProps} from './types'

const CardItem: React.FC<ItemProps> = ({image, name, price, oldPrice, discount}) => {
	return (
		<div className={clsx(styles.items)}>
			<Image src={image} className={clsx(styles.img)} alt={''} />
			<div className={clsx(styles.content)}>
				<span className={clsx(styles.name)}>{name}</span>
				<span className={clsx(styles.price)}>₱ {price}</span>
				<div className={clsx(styles.discountView)}>
					<span className={clsx(styles.oldPrice)}>{oldPrice}</span>
					<span className={clsx(styles.discount)}>{discount}</span>
				</div>
				<span className={clsx(styles.rate)}>*****</span>
			</div>
			<a href="#!">
				<div
					className={clsx(styles.hoverOn)}></div>
			</a>
		</div>
	)
}

export default CardItem
